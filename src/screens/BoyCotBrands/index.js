import { useLazyQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { getCategories } from '../../api/hooks'
import { exploreCategoriesByName } from '../../api/schema/queries'
import ExploreView from '../../components/explore'
import Header from '../../components/header/Header'
import UserProfile from '../../components/userDataComp/UserData'
import { COLORS } from '../../utility/colors/LightColors'
import styles from './style'

const BoyCotBrands = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([])
    const [myLatestBrands, setMyLatestBrands] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const { loading, error, categoriesData } = getCategories();
    const [fetchCategory, { categoryLoading, categoryData }] = useLazyQuery(exploreCategoriesByName)

    useEffect(() => {
        setData(categoriesData?.categories)
    }, [categoriesData])

    const nav = async (item) => {
        let categoryName = item?.name
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
        <View style={styles.mainview}>

            <View style={styles.headerview}>
                <Header
                    isBack={true}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {data.length === 0 ?
                    (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <ActivityIndicator size={'large'} />
                        </View>
                    )
                    :
                    (
                        <View style={styles.exploreview}>
                            {data?.map((item, index) => (
                                <View key={index} style={{ marginVertical: "5%", marginHorizontal: "2%" }}>
                                    <ExploreView
                                        key={index}
                                        iconName='cross'
                                        displayText={item.name}
                                        onPress={() => {
                                            setModalVisible(true)
                                            nav(item)
                                        }}
                                    />
                                </View>

                            ))}
                        </View>
                    )
                }
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={{ flex: 1 }}>
                    {isLoading ?
                        (
                            <View style={styles.indicatorview}>
                                <ActivityIndicator size={'large'} color={COLORS.blackColor} />
                            </View>
                        )
                        :
                        (
                            <View style={{
                                alignSelf: "center"
                            }}>

                                {myLatestBrands?.length != 0 ?
                                    (
                                        <>
                                            <Text style={[styles.titleText2, { marginVertical: responsiveScreenHeight(2) }]}>
                                                Boycott Brands
                                            </Text>
                                            <ScrollView showsHorizontalScrollIndicator={false}>
                                                {myLatestBrands?.map((item, index) => (
                                                    <TouchableOpacity

                                                        key={index} style={
                                                            styles.latestbrandstouchable
                                                        }
                                                        onPress={() => {
                                                            setModalVisible(false)
                                                            navigation.navigate('BrandDetails', {
                                                                brandId: item.id
                                                            })
                                                        }}
                                                    >
                                                        <UserProfile
                                                            name={item.name}
                                                            role={item.subTitle}
                                                            navigateIcon={true}
                                                        />
                                                    </TouchableOpacity>
                                                ))}
                                            </ScrollView>
                                        </>
                                    )
                                    :
                                    (
                                        <View style={styles.nobrandview}>
                                            <Text style={styles.titleText}>
                                                No Brands to Boycott
                                            </Text>
                                        </View>
                                    )
                                }
                            </View>
                        )
                    }
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{
                            backgroundColor: 'red',
                            position: 'absolute', bottom: responsiveScreenHeight(5), width: '90%', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', padding: responsiveScreenFontSize(2), borderRadius: responsiveScreenFontSize(1)
                        }}>
                        <Text style={styles.titleText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal >
        </View >
    )
}

// const styles = StyleSheet.create({
//     itemContainer: {
//         margin: 6,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 9,
//         borderRadius: 10,
//         overflow: 'hidden',
//         ...Platform.select({
//             android: {
//                 elevation: 4,
//             },
//         }),
//     },
//     itemContainer2: {
//         margin: 6,
//         backgroundColor: 'white',
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: 10,
//         width: responsiveScreenWidth(90),
//         borderRadius: 10,
//         overflow: 'hidden',
//         ...Platform.select({
//             android: {
//                 elevation: 4,
//             },
//         }),
//     },
//     titleText: {
//         fontSize: responsiveScreenFontSize(2),
//         color: "black",
//         fontFamily: 'mrt-rglr'
//     },
//     titleText2: {
//         fontSize: responsiveScreenFontSize(2),
//         color: "black",
//         fontFamily: 'mrt-mid'
//     },
//     titleText3: {
//         fontSize: responsiveScreenFontSize(2),
//         color: "black",
//         fontFamily: 'mrt-rglr'
//     },
//     packageDetailsContainer: {
//         margin: responsiveScreenWidth(4),
//         backgroundColor: 'white',
//         borderRadius: 2,
//         padding: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 2, // For Android
//         margin: responsiveScreenWidth(4)
//     },
//     loader: {
//         minHeight: responsiveScreenHeight(10),
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "70%"
//     },
//     flatlist: {
//         flex: 1,
//         alignItems: "center",
//         marginTop: "5%"
//     },

// });

export default BoyCotBrands