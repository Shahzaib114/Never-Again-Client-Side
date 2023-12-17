import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { COLORS } from "../../../utility/colors/LightColors";

const styles = StyleSheet.create({
    titleText: {
        fontSize: responsiveScreenFontSize(1.8),
        color: "black",
        fontFamily: 'mrt-mid'
    },
    titleText2: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-mid'
    },
    descriptionText: {
        fontSize: responsiveScreenFontSize(1.8),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    topItemsContainer: {
        width: '43%',
    },
    peopleContainer: {
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    childContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgView: {
        width: responsiveScreenWidth(40),
        alignSelf: 'center',
        height: responsiveScreenHeight(20),
    },
    imgStyle: {
        width: '100%',
        height: '100%'
    },
    exploreOpacity: {
        backgroundColor: COLORS.primaryColor,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: responsiveFontSize(0.6),
        borderRadius: responsiveFontSize(1)
    },

})

export default styles