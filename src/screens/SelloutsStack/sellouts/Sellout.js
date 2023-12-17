import { useLazyQuery } from '@apollo/client'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { getRandomPeople, getTotalPeople } from '../../../api/hooks'
import { getCategoryPeoples } from '../../../api/schema/queries'
import Header from '../../../components/header/Header'
import UserProfile from '../../../components/userDataComp/UserData'
import { COLORS } from '../../../utility/colors/LightColors'
import styles from './style'

const Sellouts = () => {
    const navigation = useNavigation()
    const { loading, error, peopleCategories } = getTotalPeople();
    const { randomPeopleLoading, randomPeopleError, randomPeople } = getRandomPeople();
    const [fetchCategory, { categoryLoading, categoryData }] = useLazyQuery(getCategoryPeoples)
    const [isLoading, setIsLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [peopleList, setPeopleList] = useState([])
    const [peopleName, setPeopleName] = useState()

    const [totalPeople, setTotalPeople] = useState()
    const [myRandomPeople, setMyRandomPeople] = useState()
    useEffect(() => {
        setTotalPeople(peopleCategories?.peopleCategories)
    }, [peopleCategories])

    useEffect(() => {
        setMyRandomPeople(randomPeople?.peoples)
    }, [randomPeople])

    const getPeopleLists = async (item) => {
        setModalVisible(true)
        const res = await fetchCategory({
            variables: {
                id: item,
            },
        })
        setPeopleList(res.data?.peopleCategory?.peoples)
        setIsLoading(false)
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Header />
            </View>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={{ flex: 1 }}>
                    {isLoading ?
                        (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size={'large'} color={COLORS.blackColor} />
                            </View>
                        )
                        :
                        (
                            <View style={{
                                alignSelf: "center"
                            }}>

                                {peopleList?.length != 0 ?
                                    (
                                        <>
                                            <Text style={[styles.titleText2, { marginVertical: responsiveScreenHeight(2) }]}>
                                                {peopleName}
                                            </Text>
                                            <ScrollView showsHorizontalScrollIndicator={false}>
                                                {peopleList?.map((item, index) => (
                                                    <TouchableOpacity

                                                        key={index} style={{
                                                            backgroundColor: COLORS.lightPrimaryColor,
                                                            marginBottom: responsiveScreenFontSize(0.5),
                                                            width: '100%',
                                                            alignSelf: 'center',
                                                            borderRadius: responsiveScreenFontSize(1)
                                                        }}
                                                        onPress={() => {
                                                            setModalVisible(false)
                                                            navigation.navigate('CelebrityDetails', {
                                                                celebId: item.id,
                                                                isCeleb: peopleName,
                                                                data: item
                                                            })
                                                        }}
                                                    >
                                                        <UserProfile
                                                            name={item.name}
                                                            role={item?.peopleCategory?.title}
                                                            navigateIcon={true}
                                                            img={item?.profilePhoto?.url && item?.profilePhoto?.url}
                                                        />
                                                    </TouchableOpacity>
                                                ))}
                                            </ScrollView>
                                        </>
                                    )
                                    :
                                    (
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.titleText}>
                                                No Categories
                                            </Text>
                                        </View>
                                    )
                                }
                            </View>
                        )
                    }
                    <TouchableOpacity
                        onPress={() => {
                            setPeopleList([])
                            setModalVisible(false)
                        }}
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

            <View style={styles.peopleContainer}>
                {totalPeople?.length === 0 ?
                    (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <ActivityIndicator size={'large'} />
                        </View>

                    )
                    :
                    (
                        <>
                            <View style={styles.topItemsContainer}>
                                <View style={styles.childContainer}>
                                    <View style={styles.imgView}>
                                        <Image
                                            style={styles.imgStyle}
                                            resizeMode='contain'
                                            source={require('../../../assets/images/celeberitySellout.png')}>
                                        </Image>
                                    </View>
                                    <Text style={styles.titleText}>
                                        {totalPeople && `${totalPeople[0]?.title} [Sellouts]`}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={async () => {
                                        setPeopleName(totalPeople[0]?.title)
                                        getPeopleLists(totalPeople[0]?.id)
                                    }}

                                    style={styles.exploreOpacity}>
                                    <Text style={styles.descriptionText}>
                                        Explore Now
                                    </Text>
                                    <Ionicons name="caret-forward" size={responsiveFontSize(3)} color={COLORS.blackColor} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.topItemsContainer}>
                                <View style={styles.childContainer}>
                                    <View style={styles.imgView}>
                                        <Image
                                            style={styles.imgStyle}
                                            resizeMode='contain'
                                            source={require('../../../assets/images/politicianSellout.png')}>
                                        </Image>
                                    </View>
                                    <Text style={styles.titleText}>
                                        {totalPeople && `${totalPeople[1]?.title} [Liars]`}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={async () => {
                                        setPeopleName(totalPeople[1]?.title)
                                        getPeopleLists(totalPeople[1]?.id)
                                    }}
                                    style={styles.exploreOpacity}>
                                    <Text style={styles.descriptionText}>
                                        Explore Now
                                    </Text>
                                    <Ionicons name="caret-forward" size={responsiveFontSize(3)} color={COLORS.blackColor} />
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
            </View>

            <View style={{ marginTop: responsiveScreenHeight(1), flex: 1 }}>
                <Text style={[styles.titleText, { marginLeft: responsiveFontSize(3), marginVertical: responsiveScreenHeight(1) }]}>
                    Latest public figures
                </Text>
                {myRandomPeople ?
                    (
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            {myRandomPeople?.map((item, index) => {

                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('CelebrityDetails', {
                                                celebId: item.id,
                                                isCeleb: peopleName,
                                                data: item
                                            })
                                        }}
                                        key={index}>
                                        <UserProfile
                                            navigateIcon={true}
                                            containerProp={{
                                                backgroundColor: COLORS.primaryColor,
                                                borderRadius: responsiveFontSize(0.5),
                                                paddingHorizontal: responsiveScreenWidth(1),
                                                marginBottom: responsiveFontSize(1)
                                            }}
                                            img={item?.profilePhoto?.url && item?.profilePhoto?.url}
                                            name={item.name}
                                            role={item.peopleCategory?.title}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </ScrollView>
                    )
                    :
                    (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <ActivityIndicator size={'large'} />
                        </View>

                    )
                }
            </View>
        </View>
    )
}

export default Sellouts