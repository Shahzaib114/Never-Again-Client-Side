import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { COLORS } from "../../utility/colors/LightColors";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        width: responsiveScreenWidth(18),
        height: responsiveScreenHeight(8),
        marginVertical: responsiveScreenHeight(1)
    },
    imgStyle: {
        width: "100%",
        borderRadius: responsiveScreenFontSize(30),
        height: "100%",
        padding: 10
    },
    detailContainer: {
        justifyContent: 'center',
        marginHorizontal: responsiveScreenWidth(2),
        width: '60%',
    },
    titleTxt: {
        color: COLORS.blackColor,
        fontSize: responsiveScreenFontSize(2),
        fontFamily: 'mrt-mid'
    },
    descriptionTxt: {
        color: COLORS.blackColor,
        fontSize: responsiveScreenFontSize(1.8),
        fontFamily: 'mrt-rglr'
    }
})
export default styles