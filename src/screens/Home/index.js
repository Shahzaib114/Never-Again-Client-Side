import { useLazyQuery } from '@apollo/client';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { getCategories, useBrands } from '../../api/hooks';
import { exploreCategoriesByName } from '../../api/schema/queries';
import Header from '../../components/header/Header';
import UserProfile from '../../components/userDataComp/UserData';
import { COLORS } from '../../utility/colors/LightColors';
import styles from './style';

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
                ...(value && value?.length > 2 ? { value } : { value: "" }),
            },
        })
        setMyLatestBrands(res?.data?.brands)
        setIsLoading(false)
    }

    return (
        <View style={styles.mainview}>
            <View style={styles.headerview}>
                <Header
                    isBack={false}
                />
            </View>
            <View style={styles.headertextmainview}>
                <View style={styles.headertextview}>
                    <Text style={styles.headertext}>Let’s find Which{'\n'}Product to Use!</Text>
                </View>
            </View>
            <View style={styles.headersearchmainview}>
                <Pressable style={styles.headersearchtouchable}>
                    <TextInput
                        placeholder="Search..."
                        style={styles.headersearchtextinput} // Adjust paddingLeft as needed
                    />
                    <FontAwesome name="search" size={15} color="black" />
                </Pressable>
            </View>
            <View style={styles.brandview}>
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

                                    <Pressable
                                        onPress={() => {
                                            setSelectedItem(item)
                                            nav(item)
                                        }}
                                        style={
                                            [styles.itemContainer, { backgroundColor: selectedItem === item ? COLORS.primaryColor : COLORS.whiteColor, }]
                                        }
                                        key={item.id}
                                    >

                                        <Text style={styles.titleText}>
                                            {item.name}
                                        </Text>
                                    </Pressable>
                                </View>

                            ))}
                        </ScrollView>
                    )
                }
            </View>
            <View>
                <Text style={
                    styles.currentBrand
                }>
                    {currentBrand}
                </Text>
            </View>
            {brandsLoading || isLoading ?
                (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator></ActivityIndicator>
                    </View>
                )
                :
                (
                    myLatestBrands?.length != 0 ?
                        (
                            <ScrollView alwaysBounceVertical showsHorizontalScrollIndicator={false}>
                                {myLatestBrands.map((item) => (
                                    <Pressable key={item.id} style={
                                        styles.latestbrands
                                    }
                                        onPress={() => {
                                            navigation.navigate('BrandDetails', {
                                                brandId: item.id
                                            })
                                        }}
                                    >
                                        <UserProfile
                                            name={item.name}
                                            role={item.subTitle}
                                            navigateIcon={true}
                                            img={item?.icon?.url}
                                        />
                                    </Pressable>
                                ))}
                            </ScrollView>

                        )
                        :
                        (
                            <View style={styles.noavailableview}>
                                <Text style={styles.titleText}>
                                    No Details Available
                                </Text>
                            </View>
                        )

                )
            }
        </View >
    )
}



export default Home