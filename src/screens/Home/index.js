import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { approvedBrandDetails, getBrandCount, getCategories, getCategoriesByName } from '../../api/hooks';
import { useLazyQuery, useQuery } from '@apollo/client';
import { approvedBrands, categories, exploreCategoriesByName } from '../../api/schema/queries';
import CodeScanner from '../cameraScanner/codeScanner';
import Header from '../../components/header/Header';



const numColumns = 2;
const Home = () => {
    const { loading, error, categoriesData } = getCategories();
    const [fetchCategories, { loadincg, errosar, data }] = useLazyQuery(exploreCategoriesByName);
    // const { detailedCatergoryLoading, detailedCatergoryerror, detailedCatergoryData } = getCategoriesByName();
    const [myData, setMyData] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        setMyData(categoriesData?.categories)
    }, [categoriesData])

    useEffect(() => {
        console.log('detailedCatergoryData', data)
    }, [data])


    const array = [
        {
            id: 0,
            name: 'Galaxy Chocolate'
        },
        {
            id: 1,
            name: 'Galaxy Chocolate'
        },
        {
            id: 2,
            name: 'Galaxy Chocolate'
        },
        {
            id: 3,
            name: 'Galaxy Chocolate'
        },
        {
            id: 4,
            name: 'Galaxy Chocolate'
        },
        {
            id: 5,
            name: 'Galaxy Chocolate'
        },
        {
            id: 6,
            name: 'Galaxy Chocolate'
        },
        {
            id: 7,
            name: 'Galaxy Chocolate'
        },
    ]

    async function nav(item) {
        console.log(item)
        let categoryName = item?.name
        let categoryId = item?.id
        let orderBy = "createdAt_DESC"
        let value = ""
        let first
        let skip = 0

        try {
            await fetchCategories({
                variables: {
                    orderBy,
                    value,
                    first,
                    skip,
                },

                variables: {
                    categoryName,
                    categoryId
                }
            })
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8) }}>
                <Header
                    isBack={false}
                />
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
                                            console.log(item)
                                            nav(item)
                                        }}
                                        style={
                                            styles.itemContainer
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
                    color: "black", fontFamily: 'mrt-rglr', fontSize: responsiveScreenFontSize(2), margin: "4%"
                }}>
                    Latest Brand
                </Text>
            </View>
            <View style={styles.flatlist}>
                <FlatList
                    alwaysBounceVertical
                    showsVerticalScrollIndicator={false}
                    data={array}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.itemContainer2}
                                onPress={() => {
                                    nav(item)
                                    navigation.navigate('BrandDetails')
                                }}
                            >
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <Text style={{
                                        color: "black", fontFamily: 'mrt-rglr'
                                    }}>{item.name}</Text>
                                </View>

                                <View style={{ backgroundColor: "#BFFF00", width: responsiveScreenWidth(20), height: responsiveScreenHeight(4), alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: "10%" }}>
                                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                                        View More
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    numColumns={numColumns}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 6,
        backgroundColor: 'white',
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
        margin: 9,
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(16),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 8,
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