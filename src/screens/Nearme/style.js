import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


const styles = StyleSheet.create({
   mainview:{
    flex: 1,
     backgroundColor: "white" 
   },
   headerview:{
    height: responsiveScreenHeight(8)
   },
   textview:{
    margin: "5%"
   },
   text:{
    color: "black", 
    fontFamily: 'mrt-rglr'
   },
   mapstyle:{
    width: "100%",
    alignSelf: 'center',
    height: responsiveScreenHeight(50),
    borderRadius:10
   },
   view2:{
    margin: "10%" 
   },
   text2:{
    color: "black", fontFamily: 'mrt-rglr' 
   }

})

export default styles