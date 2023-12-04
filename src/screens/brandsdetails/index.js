import { View, Text, ScrollView ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import TopBarBack from '../../components/topbarback'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const BrandDetails = () => {

    const data = [
        {
            id: 1,
            name: "Latest"
        },
        {
            id: 2,
            name: "Clothes"
        },
        {
            id: 3,
            name: "App"
        },
        {
            id: 4,
            name: "Snack"
        },
        {
            id: 5,
            name: "Technology"
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8) }}>
                <TopBarBack />
            </View>
            <View style={{ alignItems: "center", marginLeft: responsiveScreenWidth(5) }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item) => (

                        <View key={item.id}>
                            <TouchableOpacity
                                style={
                                    styles.itemContainer
                                }
                                key={item.id}
                            >
                                <Text style={styles.titleText}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2), margin: "4%" }}>
                    Latest Brand
                </Text>
            </View>
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <View style={{backgroundColor:"grey",width:responsiveScreenWidth(90),height:responsiveScreenHeight(8),borderRadius:10}}>
                                
                </View>
            </View>
            <View style={{alignItems:"center",marginTop:responsiveScreenHeight(5)}}>
            <View style={{justifyContent:"center",width:responsiveScreenWidth(90),}}>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>
                   Galaxy Chocolate
                </Text>
            </View>
            <View style={{justifyContent:"center",width:responsiveScreenWidth(90),}}>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>
                   Galaxy Chocolate is owned by Mars corporation
                </Text>
            </View>
            <View style={{justifyContent:"center",width:responsiveScreenWidth(90),}}>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>
                  We Beleive everyone choose deserves to choose pleasue with great tatsing chocolate,and we know that each piece of rich,creamy Galaxy choclate is an expression of effortless pleasures.
                  So,we've decided to offer the nation a choclate amnesty.Send us your unwanted Dairy milk and we will swap it for a Galaxy .Of course,all
                  unwanted choclate will be donated to good cause.Galaxy part of Mars"^Apart from innocent Palestinian people.
                  {'\n\n'}
                  Dont eat Galaxy,Don't share it,Dont't buy it.
                  {'\n\n'}
                  Alternatives
                  {'\n'}
                  No alternative researched yet.Help us out!
                </Text>
            </View>
            </View>
            <View style={{margin:"5%"}}>
                <TouchableOpacity style={{backgroundColor:"yellow",width:responsiveScreenWidth(22),height:responsiveScreenHeight(5),borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black"}}>
                        Proof
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 6,
        backgroundColor: 'white',
        alignItems:"center",
        justifyContent:"center",
        padding:9,
        borderRadius:10,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    itemContainer2: {
        margin: 9,
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(16),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black"
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

export default BrandDetails