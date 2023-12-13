import { useLazyQuery } from '@apollo/client';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { getCategories, useBrands } from '../../api/hooks';
import { exploreCategoriesByName } from '../../api/schema/queries';
import Header from '../../components/header/Header';
import UserProfile from '../../components/userDataComp/UserData';
import { COLORS } from '../../utility/colors/LightColors';


const numColumns = 2;
const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [currentBrand, setCurrentBrand] = useState('Latest Brands')
    const [selectedItem, setSelectedItem] = useState(null);
    const focus = useIsFocused()
    const { loading, error, categoriesData } = getCategories();
    const [fetchCategory, { categoryLoading, categoryData }] = useLazyQuery(exploreCategoriesByName)
    let { brandsLoading, brandsError, brandsData, refetch } = useBrands({
        orderBy: "createdAt_DESC",
        value: "",
        first: 50,
        skip: 0,
    });

    const [myData, setMyData] = useState([])
    const [myLatestBrands, setMyLatestBrands] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        setMyData(categoriesData?.categories)
    }, [categoriesData])

    useEffect(() => {
        if (brandsData?.brands) {
            setMyLatestBrands(brandsData?.brands)
        }
    }, [brandsData])

    const nav = async (item) => {
        let categoryName = item?.name
        setCurrentBrand(categoryName)
        let value = ""
        setIsLoading(true)
        const res = await fetchCategory({
            variables: {
                categoryName: categoryName,
                first: 10,
                ...(value && value.length > 2 ? { value } : { value: "" }),
            },
        })
        setMyLatestBrands(res?.data?.brands)
        setIsLoading(false)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8), backgroundColor: "#BFFF00" }}>
                <Header
                    isBack={false}
                />
            </View>
            <View style={{ height: responsiveScreenHeight(8), backgroundColor: "#BFFF00" }}>
                <View style={{ marginLeft: responsiveScreenWidth(5) }}>
                    <Text style={{ color: COLORS.blackColor, fontSize: responsiveScreenFontSize(3), fontFamily: "mrt-mid" }}>Let’s find Which{'\n'}Product to Use!</Text>
                </View>
            </View>
            <View style={{ height: responsiveScreenHeight(8), backgroundColor: "#BFFF00", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ backgroundColor: "white", padding: 8, width: responsiveScreenWidth(70), borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Search"
                        style={{ flex: 1, paddingLeft: 10 }} // Adjust paddingLeft as needed
                    />
                    <FontAwesome name="search" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginLeft: responsiveScreenWidth(5) }}>
                {loading ?
                    (
                        <View>
                            <ActivityIndicator></ActivityIndicator>
                        </View>
                    )
                    :
                    (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {myData?.map((item) => (

                                <View key={item.id}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedItem(item)
                                            nav(item)
                                        }}
                                        style={
                                            [styles.itemContainer, { backgroundColor: selectedItem === item ? COLORS.lightPrimaryColor : COLORS.whiteColor, }]
                                        }
                                        key={item.id}
                                    >

                                        <Text style={styles.titleText}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            ))}
                        </ScrollView>
                    )
                }
            </View>
            <View>
                <Text style={{
                    color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(3), margin: "2%", marginHorizontal: '4%'
                }}>
                    {currentBrand}
                </Text>
            </View>
            {isLoading ?
                (
                    <View>
                        <ActivityIndicator></ActivityIndicator>
                    </View>

                )
                :
                (
                    myLatestBrands.length != 0 ?
                        (
                            <ScrollView alwaysBounceVertical showsHorizontalScrollIndicator={false}>
                                {myLatestBrands.map((item) => (
                                    <TouchableOpacity key={item.id} style={{
                                        backgroundColor: COLORS.lightPrimaryColor,
                                        marginBottom: responsiveScreenFontSize(0.5),
                                        width: '95%',
                                        alignSelf: 'center',
                                        borderRadius: responsiveScreenFontSize(1)
                                    }}
                                        onPress={() => {
                                            navigation.navigate('BrandDetails', {
                                                brandId: item.id
                                            })
                                        }}
                                    >
                                        <UserProfile
                                            name={item.path}
                                            role={item.name}
                                            navigateIcon={true}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                        )
                        :
                        (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.titleText}>
                                    No Available Brands
                                </Text>
                            </View>
                        )

                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 6,
        alignItems: "center",
        justifyContent: "center",
        padding: 9,
        borderRadius: 10,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    itemContainer2: {
        margin: 6,
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        width: responsiveScreenWidth(90),
        borderRadius: 10,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    titleText2: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-mid'
    },
    titleText3: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    packageDetailsContainer: {
        margin: responsiveScreenWidth(4),
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // For Android
        margin: responsiveScreenWidth(4)
    },
    loader: {
        minHeight: responsiveScreenHeight(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70%"
    },
    flatlist: {
        flex: 1,
        alignItems: "center",
        marginTop: "5%"
    },

});

export default Home