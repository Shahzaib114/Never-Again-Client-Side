import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'
import UserProfile from '../../components/userDataComp/UserData'
import styles from './style'
import { COLORS } from '../../utility/colors/LightColors'


const People = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header
                isBack={true}
            />
            <UserProfile />
            <View style={styles.descriptionContainer}>
                <Text style={styles.titleTxt}>Description</Text>
                <Text style={[styles.descriptionTxt, { color: COLORS.silverColor }]}>Gal Gadot is Na isreali actress & model.
                    She was born in rosh Ha’eyeing, Isreal,to an Ashkenzie Jewish Family (from plonad, Austria, Germany & Czechosvakia). She Served in the IDF for two years & won the miss isreal title in 2004
                </Text>

                <View>
                    <Text style={[styles.titleTxt, { fontSize: responsiveFontSize(1.7) }]}>Born:
                        <Text style={[styles.descriptionTxt, { color: COLORS.silverColor }]}>{` 1985 - 04 -30`}</Text>
                    </Text>
                    <Text style={[styles.titleTxt, { fontSize: responsiveFontSize(1.7) }]}>Height:
                        <Text style={[styles.descriptionTxt, { color: COLORS.silverColor }]}>{` 5’10’(1.78 m)`}</Text>
                    </Text>
                </View>

                <Text style={styles.titleTxt}>Specialities</Text>
                <Text style={styles.whiteBackgroundTxt}>Celebrity</Text>

                <Text style={styles.whiteBackgroundTxt}>
                    Don't watch Gal Gadot's movies. Don't follow Gal Gadot's socials. Don't support Gal Gadot.
                </Text>
                <View style={styles.imagesContainer}>
                    <TouchableOpacity style={styles.imgContainer}>
                        <Image source={require('../../../src/assets/images/facebook.png')} style={styles.imgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgContainer}>
                        <Image source={require('../../../src/assets/images/instagram.png')} style={styles.imgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgContainer}>
                        <Image source={require('../../../src/assets/images/twitter.png')} style={styles.imgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default People