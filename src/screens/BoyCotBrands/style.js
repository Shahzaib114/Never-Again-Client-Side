import { StyleSheet } from "react-native";
import {
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth
} from 'react-native-responsive-dimensions';
import { COLORS } from "../../utility/colors/LightColors";



const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "white"
    },
    headerview: {
        height: responsiveScreenHeight(8)
    },
    exploreview: {
        marginVertical: '5%',
        flexWrap: "wrap",
        flexDirection: "row",
    },
    exploreview2: {
        marginVertical: "5%",
        marginHorizontal: "2%"
    },
    indicatorview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    latestbrandstouchable: {
        backgroundColor: COLORS.primaryColor,
        marginBottom: responsiveScreenFontSize(0.5),
        width: '100%',
        alignSelf: 'center',
        borderRadius: responsiveScreenFontSize(1)
    },
    nobrandview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalview: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: responsiveScreenHeight(5),
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveScreenFontSize(2),
        borderRadius: responsiveScreenFontSize(1)
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