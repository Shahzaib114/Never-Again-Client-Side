import { StyleSheet } from "react-native";
import { COLORS } from "../../utility/colors/LightColors";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        width: responsiveScreenWidth(18),
        height: responsiveScreenHeight(10),
    },
    imgStyle: {
        width: "100%",
        height: "100%"
    },
    detailContainer: {
        justifyContent: 'center',
        marginHorizontal: responsiveScreenWidth(2)
    },
    titleTxt: {
        color: COLORS.blackColor,
        fontSize: responsiveScreenFontSize(2),
        fontFamily: 'mrt-mid'
    },
    descriptionTxt: {
        color: COLORS.blackColor,
        fontSize: responsiveScreenFontSize(1.6),
        fontFamily: 'mrt-rglr'
    }
})
export default styles