import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { GetapprovedBrandDetailsById, brandDetails, getCategoryPeopleById } from '../../api/hooks'
import UserProfile from '../../components/userDataComp/UserData'

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
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: responsiveScreenHeight(2),
                        marginLeft: responsiveScreenWidth(6),
                        width: '60%',
                        alignSelf: 'flex-start'
                    }}>
                        <TouchableOpacity style={{ width: responsiveScreenWidth(5), height: responsiveScreenHeight(3) }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={require('../../../src/assets/images/left-arrow.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <Text style={{ textAlign: "center", fontFamily: 'mrt-mid' }}>{myBrandDetails.name}</Text>
                    </View>
                    <View style={{ marginTop: responsiveScreenHeight(3) }}>
                        <UserProfile
                            name={myBrandDetails.name}
                            role={myBrandDetails?.peopleCategory?.title}
                            img={myBrandDetails?.profilePhoto?.url}
                        />
                    </View>


                    <View style={{ alignItems: "center", marginTop: responsiveScreenHeight(2), }}>

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
                            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.5), fontFamily: 'mrt-rglr' }}>
                                {myBrandDetails.detail}
                            </Text>
                        </View>
                        {myBrandDetails?.profileUrl &&
                            <View style={{ justifyContent: "center", width: responsiveScreenWidth(90), marginTop: responsiveScreenHeight(2) }}>
                                <Text style={{ color: "black", fontFamily: 'mrt-mid', fontSize: responsiveScreenFontSize(2) }}>
                                    profile
                                </Text>
                                <TouchableOpacity
                                    style={{ marginHorizontal: responsiveScreenWidth(1) }}
                                    onPress={() => Linking.openURL(myBrandDetails?.profileUrl)}
                                >
                                    <Text style={styles.greenBackground}>
                                        Go to {myBrandDetails.name}'s Profile
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }


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
                                    <TouchableOpacity
                                        key={index}
                                        style={{ marginHorizontal: responsiveScreenWidth(1) }}
                                        onPress={() => navigation.navigate('Proof')}
                                    >
                                        <Text style={{ color: "black", alignSelf: 'flex-start', padding: responsiveScreenFontSize(1), backgroundColor: "#BFFF00", borderRadius: 10, }}>
                                            {i.name}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={{alignSelf:'flex-start', margin: responsiveScreenHeight(2) }}>
                            <Text style={styles.titleText}>Alternative:</Text>
                            <Text style={styles.desciptionTxt}>No alternatives researched yet</Text>
                        </View>
                    </View>
                </ScrollView>
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
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'mrt-rglr'
    },
    greenBackground: {
        color: "black",
        fontFamily: 'mrt-rglr',
        alignSelf: 'flex-start',
        padding: responsiveScreenFontSize(1),
        backgroundColor: "#BFFF00",
        borderRadius: responsiveScreenFontSize(1),
    }

});

export default CelebrityDetails