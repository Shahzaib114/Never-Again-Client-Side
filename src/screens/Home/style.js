import { StyleSheet } from "react-native";
import {
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveScreenHeight
} from 'react-native-responsive-dimensions'
import { COLORS } from "../../utility/colors/LightColors";



const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "white"
    },
    headerview: {
        height: responsiveScreenHeight(8),
        backgroundColor: "#BFFF00"
    },
    headertextmainview: {
        height: responsiveScreenHeight(8),
        backgroundColor: "#BFFF00"
    },
    headertextview: {
        marginLeft: responsiveScreenWidth(5)
    },
    headertext: {
        color: COLORS.blackColor,
        fontSize: responsiveScreenFontSize(3),
        fontFamily: "mrt-mid"
    },
    headersearchtouchable: {
        backgroundColor: "white",
        padding: 8,
        width: responsiveScreenWidth(70),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headersearchtextinput: {
        flex: 1,
        paddingLeft: 10
    },
    brandview: {
        alignItems: "center",
        marginLeft: responsiveScreenWidth(5)
    },
    latestbrands: {
        backgroundColor: COLORS.primaryColor,
        marginBottom: responsiveScreenFontSize(0.5),
        width: '95%',
        alignSelf: 'center',
        borderRadius: responsiveScreenFontSize(1)
    },
    currentBrand: {
        color: "black",
        fontFamily: 'mrt-mid',
        fontSize: responsiveScreenFontSize(3),
        margin: "2%",
        marginHorizontal: '4%'
    },
    headersearchmainview: {
        height: responsiveScreenHeight(8),
        backgroundColor: "#BFFF00",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    noavailableview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        margin: 6,
        alignItems: "center",
        justifyContent: "center",
        padding: 9,
        borderRadius: 10,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    itemContainer2: {
        margin: 6,
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        width: responsiveScreenWidth(90),
        borderRadius: 10,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    titleText2: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-mid'
    },
    titleText3: {
        fontSize: responsiveScreenFontSize(2),
        color: "black",
        fontFamily: 'mrt-rglr'
    },
    packageDetailsContainer: {
        margin: responsiveScreenWidth(4),
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // For Android
        margin: responsiveScreenWidth(4)
    },
    loader: {
        minHeight: responsiveScreenHeight(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70%"
    },
    flatlist: {
        flex: 1,
        alignItems: "center",
        marginTop: "5%"
    },

});
export default styles