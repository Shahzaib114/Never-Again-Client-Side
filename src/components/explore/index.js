import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
        <View style={{ flex: 1, backgroundColor: "white", width: '100%' }}>
            <View style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: 3,
                borderColor: "#BFFF00",
                alignItems: "center",
            }}>

                {imageSource && (
                    <View style={{
                        width: '100%',
                        height: responsiveScreenHeight(7),
                        borderRadius: 4,
                        width: responsiveScreenWidth(22),
                    }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                backgroundColor: COLORS.primaryColor,
                                padding: responsiveFontSize(0.7),
                                width:'100%',
                                textAlign:'center',
                                borderRadius: responsiveFontSize(0.7),
                                marginTop: responsiveFontSize(-2.5),
                                fontFamily: 'mrt-mid',
                                fontSize: responsiveFontSize(1.5)
                            }}
                        >{displayText}</Text>
                        {iconName === 'check' || iconName === 'cross'  ?
                            <Entypo name={iconName} size={responsiveFontSize(4.5)} color="black" style={{ marginHorizontal: responsiveFontSize(1), alignSelf: 'center', textAlign: 'center' }} />
                            :
                            <MaterialCommunityIcons name={iconName} size={responsiveFontSize(5)} color="black" style={{ alignSelf: 'center', textAlign: 'center', marginVertical:5 }} />
                        }
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