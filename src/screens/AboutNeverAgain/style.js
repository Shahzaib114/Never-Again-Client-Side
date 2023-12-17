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
    textview:{
        margin:"5%"
    },
    text1:{
        color: "black", 
        fontFamily: 'mrt-rglr',
        fontSize:16,marginTop:"5%" 
    },
    text2:{
        color: "black", 
        fontFamily: 'mrt-rglr',
        fontSize:16,marginTop:"3%" 
    }

})

export default styles