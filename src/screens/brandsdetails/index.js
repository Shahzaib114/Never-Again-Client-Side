import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { brandDetails } from '../../api/hooks'
import UserProfile from '../../components/userDataComp/UserData'

const BrandDetails = ({ route }) => {

    const navigation = useNavigation();
    let { brandLoading, brandError, brandData } = brandDetails({
        id: route?.params?.brandId,
    });
    const [myBrandDetails, setMyBrandDetails] = useState()

    useEffect(() => {
        setMyBrandDetails(brandData?.brand)
    }, [brandData])

    if (myBrandDetails) {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ScrollView style={{ marginVertical: responsiveScreenHeight(1) }}>
                    <View style={{
                        flexDirection: "row",
                        gap: responsiveScreenWidth(2),
                        alignItems: "center",
                        marginTop: responsiveScreenHeight(2),
                        marginLeft: responsiveScreenWidth(6),
                        width: '100%',
                        alignSelf: 'flex-start'
                    }}>
                        <Pressable style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(5) }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={require('../../../src/assets/images/left-arrow.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                        </Pressable>
                        <Text style={{ textAlign: "center", fontFamily: 'mrt-mid' }}>{myBrandDetails.name}</Text>
                    </View>
                    <View style={{ marginTop: responsiveScreenHeight(3) }}>
                        <UserProfile
                            name={myBrandDetails.name}
                            role={myBrandDetails.descriptionSmall}
                        />
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardChildContainer}>
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), }}>
                                <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                    Description
                                </Text>
                            </View>
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), }}>
                                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.9), fontFamily: 'mrt-rglr' }}>
                                    {myBrandDetails.description}
                                </Text>
                            </View>
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginTop: responsiveScreenHeight(2) }}>
                                <Text style={styles.titleText}>
                                    Specialities
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf: 'baseline',
                                left: '5%'
                            }}>
                                {myBrandDetails?.linking?.map((i, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={{ marginHorizontal: responsiveScreenWidth(1) }}
                                        >
                                            <Text style={{
                                                color: "black",
                                                alignSelf: 'flex-start',
                                                padding: responsiveScreenFontSize(1),
                                                backgroundColor: "#BFFF00",
                                                borderRadius: 10,
                                                fontFamily: 'mrt-rglr'
                                            }}>
                                                {i.name}
                                            </Text>
                                        </View>
                                    )
                                })}
                            </View>
                            <View style={{ alignSelf: 'flex-start', marginVertical: responsiveScreenHeight(2) }}>
                                <Text style={styles.titleText}>Alternative:</Text>
                                <Text style={styles.desciptionTxt}>No alternatives researched yet</Text>
                            </View>

                            {myBrandDetails?.proofLinks &&
                                <Pressable
                                    style={styles.linkOpacity}
                                    onPress={() => Linking.openURL(myBrandDetails?.proofLinks)}
                                >
                                    <Text style={styles.greenBackground}>
                                        Proof
                                    </Text>
                                </Pressable>
                            }

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
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
    cardContainer: {
        alignItems: "center",
        marginTop: responsiveScreenHeight(2),
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        overflow: 'hidden',
        borderRadius: responsiveScreenFontSize(1),
        borderColor: 'grey',
        shadowColor: "#000", // Shadow color
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1, // Shadow opacity (adjust as needed)
        shadowRadius: 1, // Shadow radius
        elevation: 6, // For Android
    },
    cardChildContainer: {
        alignItems: "center",
        // marginTop: responsiveScreenHeight(2),
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
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
        fontFamily: 'mrt-mid'
    },
    desciptionTxt: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.5),
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
    linkOpacity: {
        marginHorizontal: responsiveScreenWidth(1),
        backgroundColor: "#BFFF00",
        justifyContent: "center",
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        borderRadius: responsiveScreenFontSize(1)
    },
    greenBackground: {
        color: "black",
        fontFamily: 'mrt-mid',
        alignSelf: 'center',
        fontSize: responsiveScreenFontSize(2),
        padding: responsiveScreenFontSize(1),
        borderRadius: responsiveScreenFontSize(1),
    }
});

export default BrandDetails