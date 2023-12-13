import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { COLORS } from '../../utility/colors/LightColors'


const ExploreView = ({ imageSource }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: 3,
                borderColor: "#BFFF00",
                alignItems: "center"
            }}>

                {imageSource && (
                    <View style={{
                        width: '100%',
                        height: responsiveScreenHeight(7),
                        justifyContent: 'center',
                        borderRadius: 4,
                    }}>
                        <ImageBackground source={imageSource} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain", borderRadius: 6, alignItems: 'center'
                        }}
                            imageStyle={{ borderRadius: responsiveFontSize(1) }}
                        >
                            <Text
                                style={{ backgroundColor: COLORS.primaryColor, padding: responsiveFontSize(0.7), borderRadius: responsiveFontSize(0.7), marginTop: responsiveFontSize(-1) }}
                            >Prefumes</Text>
                        </ImageBackground>
                    </View>

                )}
            </View>

            <View style={{ marginTop: responsiveScreenHeight(0.5) }}>
                <TouchableOpacity style={{ backgroundColor: "#BFFF00", width: responsiveScreenWidth(25), height: responsiveScreenHeight(4), borderRadius: 6, alignItems: "center", justifyContent: "center" }}>
                    <Text>Explore Now</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default ExploreView