import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../../components/header/Header'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import styles from './style'
import { COLORS } from '../../../utility/colors/LightColors'
import Ionicons from '@expo/vector-icons/Ionicons';
import UserProfile from '../../../components/userDataComp/UserData'

const Sellouts = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Header />
            </View>
            <View style={styles.peopleContainer}>
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
                            {`Celebrity [Sellouts]`}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.exploreOpacity}>
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
                            {`Politician [Liars]`}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.exploreOpacity}>
                        <Text style={styles.descriptionText}>
                            Explore Now
                        </Text>
                        <Ionicons name="caret-forward" size={responsiveFontSize(3)} color={COLORS.blackColor} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: responsiveScreenHeight(1) }}>
                <UserProfile
                    navigateIcon={true}
                    containerProp={{
                        backgroundColor: COLORS.primaryColor, borderRadius: responsiveFontSize(0.5),
                        paddingHorizontal: responsiveScreenWidth(1)
                    }}
                />
            </View>
        </View>
    )
}

export default Sellouts