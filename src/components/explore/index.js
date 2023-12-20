import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { COLORS } from '../../utility/colors/LightColors';

const ExploreView = ({
    imageSource = 'https://media.graphassets.com/kMTtw82jTYWxOY837WGK',
    displayText,
    onPress,
    iconName = 'check',
}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: 3,
                borderColor: "#BFFF00",
                alignItems: "center",
                justifyContent: 'center'
            }}>

                {imageSource && (
                    <View style={{
                        width: '100%',
                        height: responsiveScreenHeight(7),
                        justifyContent: 'center',
                        borderRadius: 4,
                        width: responsiveScreenWidth(22),
                    }}>
                        <Text
                            style={{
                                backgroundColor: COLORS.primaryColor,
                                padding: responsiveFontSize(0.7),
                                alignSelf: 'center',
                                borderRadius: responsiveFontSize(0.7),
                                marginTop: responsiveFontSize(-3.5),
                                fontFamily: 'mrt-mid',
                                justifyContent:'center',
                                alignItems:'center',
                                fontSize: responsiveFontSize(1.5)
                            }}
                        >{displayText}</Text>
                        <Entypo name={iconName} size={responsiveFontSize(4.5)} color="black" style={{ marginHorizontal: responsiveFontSize(1), alignSelf: 'center', textAlign:'center' }} />
                    </View>

                )}
            </View>

            <View style={{ marginTop: responsiveScreenHeight(0.5) }}>
                <TouchableOpacity style={{
                    backgroundColor: "#BFFF00",
                    width: responsiveScreenWidth(25),
                    height: responsiveScreenHeight(4),
                    borderRadius: 6,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: 'center'
                }}
                    onPress={onPress}
                >
                    <Text style={styles.desciptionTxt}>Explore Now</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    desciptionTxt: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'mrt-rglr'
    },

})

export default ExploreView