import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import IconComponent from '../../components/iconComponent/IconComponent'
import SimpleHeader from '../../components/simpleHeader/SimpleHeader'
import UserProfile from '../../components/userDataComp/UserData'
import { COLORS } from '../../utility/colors/LightColors'

const CelebrityDetails = ({ route }) => {

    const navigation = useNavigation();
    const [myBrandDetails, setMyBrandDetails] = useState()

    useEffect(() => {
        if (route?.params) {
            setMyBrandDetails(route?.params?.data)
        }
    }, [])

    if (myBrandDetails) {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <ScrollView style={{ marginVertical: responsiveScreenHeight(1) }}>
                    <SimpleHeader
                        txt={myBrandDetails.name}
                    />
                    <View style={{ marginTop: responsiveScreenHeight(3) }}>
                        <UserProfile
                            name={myBrandDetails.name}
                            role={myBrandDetails?.peopleCategory?.title}
                            img={myBrandDetails?.profilePhoto?.url}
                        />
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.cardChildContainer}>

                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), }}>
                                <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                    Date of Birth:
                                    <Text style={styles.desciptionTxt}>
                                        {' '}
                                        {myBrandDetails.dateOfBirth ? myBrandDetails.dateOfBirth : 'Nan'}
                                    </Text>

                                </Text>
                            </View>
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginBottom: responsiveScreenHeight(1) }}>
                            </View>


                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), }}>
                                <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                    Description
                                </Text>
                            </View>
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), }}>
                                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.9), fontFamily: 'mrt-rglr' }}>
                                    {myBrandDetails.detail}
                                </Text>
                            </View>
                            {myBrandDetails?.profileUrl &&
                                <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginTop: responsiveScreenHeight(2) }}>
                                    <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                        Profile
                                    </Text>
                                    <Pressable
                                        style={{ marginHorizontal: responsiveScreenWidth(1) }}
                                        onPress={() => Linking.openURL(myBrandDetails?.profileUrl)}
                                    >
                                        <Text style={styles.greenBackground}>
                                            Go to {myBrandDetails.name}'s Profile
                                        </Text>
                                    </Pressable>
                                </View>
                            }

                            {myBrandDetails?.linking &&
                                <>
                                    <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
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
                                                <Pressable
                                                    key={index}
                                                    style={{ marginHorizontal: responsiveScreenWidth(1) }}
                                                    onPress={() => navigation.navigate('Proof')}
                                                >
                                                    <Text style={{ color: "black", alignSelf: 'flex-start', padding: responsiveScreenFontSize(1), backgroundColor: "#BFFF00", borderRadius: 10, }}>
                                                        {i.name}
                                                    </Text>
                                                </Pressable>
                                            )
                                        })}
                                    </View>
                                </>
                            }

                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginTop: responsiveScreenHeight(2) }}>
                                <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                    Social Links
                                </Text>
                                <View style={styles.imagesContainer}>
                                    <IconComponent
                                        socialLink={myBrandDetails?.facebookUrl}
                                        imageSource={require('../../../src/assets/images/facebook.png')}
                                        iconName={'facebook'}
                                    />
                                    <IconComponent
                                        socialLink={myBrandDetails?.instagramUrl || undefined}
                                        imageSource={require('../../../src/assets/images/instagram.png')}
                                        iconName={'instagram'}
                                    />
                                    <IconComponent
                                        socialLink={myBrandDetails?.twitterUrl && myBrandDetails?.twitterUrl}
                                        imageSource={require('../../../src/assets/images/twitter.png')}
                                        iconName={'twitter'}
                                    />
                                </View>
                            </View>
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
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
    },

    imagesContainer: {
        flexDirection: "row",
        gap: responsiveFontSize(1),
    },
    imgStyle: {
        width: "100%",
        height: "100%"
    },
    imgContainer: {
        backgroundColor: COLORS.whiteColor,
        width: responsiveScreenHeight(6),
        height: responsiveScreenHeight(6),
        padding: responsiveFontSize(2),
        borderRadius: responsiveFontSize(20)
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
    desciptionTxt: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.9),
        fontFamily: 'mrt-rglr'
    },
    greenBackground: {
        color: "black",
        fontFamily: 'mrt-rglr',
        alignSelf: 'flex-start',
        fontSize: responsiveScreenFontSize(1.9),
        padding: responsiveScreenFontSize(1),
        backgroundColor: "#BFFF00",
        borderRadius: responsiveScreenFontSize(1),
    }

});

export default CelebrityDetails