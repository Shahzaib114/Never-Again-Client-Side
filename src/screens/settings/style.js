import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { COLORS } from "../../utility/colors/LightColors";


const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: responsiveScreenHeight(2),
        marginLeft: responsiveScreenWidth(6),
        width: '50%',
        alignSelf: 'flex-start'
    },
    view1touchable: {
        width: responsiveScreenWidth(5),
        height: responsiveScreenHeight(3)
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    view1text: {
        textAlign: "center",
        fontFamily: 'mrt-rglr'
    },
    view2: {
        margin: "5%"
    },
    view2touchable: {
        flexDirection: "row",
        marginTop: responsiveScreenHeight(2)
    },
    view3: {
        flexDirection: "row",
        marginTop: responsiveScreenHeight(5)
    },
    text: {
        fontFamily: 'mrt-rglr',
        color: "black",
        textAlign: "center",
        fontSize: 16,
        marginLeft: "2%"
    },
    text2: {
        color: COLORS.blackColor,
        fontFamily: 'mrt-rglr',
        textAlign: "center",
        fontSize: 16,
        marginLeft: "5%"
    },
    view4:{
        width: responsiveScreenWidth(6),
         height: responsiveScreenHeight(3)
    }

})

export default styles