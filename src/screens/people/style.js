import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";
import { COLORS } from "../../utility/colors/LightColors";

const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: "row",
        gap: responsiveFontSize(1),
        marginVertical: responsiveScreenHeight(2)
    },
    imgStyle: {
        width: "100%",
        height: "100%"
    },
    imgContainer: {
        backgroundColor: COLORS.whiteColor,
        width: responsiveScreenHeight(6),
        height: responsiveScreenHeight(6),
        padding: responsiveFontSize(2),
        borderRadius: responsiveFontSize(20)
    },
    descriptionContainer: {
        alignItems: "flex-start",
        width: '90%',
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(5),
        gap: responsiveFontSize(1)
    },
    titleTxt: {
        color: COLORS.blackColor,
        fontFamily: 'mrt-mid',
        fontSize: responsiveFontSize(2),
    },
    descriptionTxt: {
        color: COLORS.blackColor,
        fontFamily: 'mrt-rglr',
        fontSize: responsiveFontSize(1.8),
    },
    whiteBackgroundTxt: {
        color: COLORS.blackColor,
        fontSize: responsiveFontSize(1.7),
        fontFamily: "mrt-rglr",
        padding: responsiveFontSize(1),
        backgroundColor: COLORS.greyColor,
        borderRadius: responsiveFontSize(1)
    }

})

export default styles