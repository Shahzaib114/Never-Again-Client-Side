import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { COLORS } from '../../utility/colors/LightColors';

const IconComponent = ({
    imageSource = require('../../../src/assets/images/facebook.png'),
    instaLink = "https://www.instagram.com/accounts/login/",
    facebookLink = "https://www.facebook.com/",
    twitterLink = "https://twitter.com/",
    socialLink,
    iconName,
}) => {
    let link;
    switch (iconName) {
        case 'instagram':
            link = socialLink ? socialLink : instaLink;
            break;
        case 'facebook':
            link = socialLink ? socialLink : facebookLink;
            break;
        case 'twitter':
            link = socialLink ? socialLink : twitterLink;
            break;
        default:
            link = socialLink;
    }

    return (

        <TouchableOpacity
            onPress={() => { Linking.openURL(link) }}
            style={styles.imgContainer}>
            <Image source={imageSource} style={styles.imgStyle} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imgContainer: {
        backgroundColor: COLORS.darkGreyColor,
        width: responsiveScreenHeight(6),
        height: responsiveScreenHeight(6),
        padding: responsiveFontSize(1.7),
        borderRadius: responsiveFontSize(20)
    },
    imgStyle: {
        width: "100%",
        height: "100%"
    },


})

export default IconComponent