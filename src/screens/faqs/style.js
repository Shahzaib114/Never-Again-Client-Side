import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { COLORS } from "../../utility/colors/LightColors";


const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "white"
    },
    headerview: {
        height: responsiveScreenHeight(8)
    },
    textview: {
        margin: "5%"
    },
    text1: {
        color: COLORS.blackColor,
        fontFamily: "mrt-mid",
        fontSize: responsiveScreenFontSize(2.6)
    },
    text2: {
        color: COLORS.blackColor,
        fontFamily: "mrt-mid",
        fontSize: responsiveScreenFontSize(2)
    },
    bottomtextview:{
        marginBottom: "5%"
    },
    textleft:{
        marginLeft: responsiveScreenWidth(10)
    },
    textcentre:{
        textAlign: "center"
    },
    text3:{
        color: COLORS.blackColor,
         textAlign: "center"
    }

})

export default styles