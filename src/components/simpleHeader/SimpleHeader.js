import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const SimpleHeader = ({
    image = require('../../../src/assets/images/left-arrow.png'),
    txt = 'Brand'
}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <Pressable
                hitSlop={15}
                style={styles.container}
                onPress={() => navigation.goBack()}
            >
                <Image source={image} style={styles.imgStyle} />
            </Pressable>
            <Text style={styles.titleText}>{txt}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: responsiveScreenHeight(2),
        marginLeft: responsiveScreenWidth(6),
        width: '30%',
        alignSelf: 'flex-start'
    },
    container: {
        width: responsiveScreenWidth(10),
        height: responsiveScreenHeight(3)
    },
    imgStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
})

export default SimpleHeader

