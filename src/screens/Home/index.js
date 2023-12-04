import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import TopBar from '../../components/topbar';
import { useNavigation } from '@react-navigation/native';



const numColumns = 2;
const Home = () => {

    const navigation=useNavigation();

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

    const array = [
        {
            id: 0,
            name: 'Galaxy Chocolate'
        },
        {
            id: 1,
            name: 'Galaxy Chocolate'
        },
        {
            id: 2,
            name: 'Galaxy Chocolate'
        },
        {
            id: 3,
            name: 'Galaxy Chocolate'
        },
        {
            id: 4,
            name: 'Galaxy Chocolate'
        },
        {
            id: 5,
            name: 'Galaxy Chocolate'
        },
        {
            id: 6,
            name: 'Galaxy Chocolate'
        },
        {
            id: 7,
            name: 'Galaxy Chocolate'
        },
    ]

    function nav(id) {
        console.log(id)
        {
          switch (id) {
            case 0:
              navigation.navigate('BrandDetails');
              break;       
            default:
          }
        }
      }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8) }}>
                <TopBar />
            </View>
            <View style={{alignItems:"center",marginLeft:responsiveScreenWidth(5)}}>
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
            <View style={styles.flatlist}>
                <FlatList
                    alwaysBounceVertical
                    showsVerticalScrollIndicator={false}
                    data={array}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.itemContainer2} 
                            onPress={() => nav(item.id)}
                            >
                                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                    <Text style={{ color: "black" }}>{item.name}</Text>
                                </View>

                                <View style={{ backgroundColor: "yellow", width: responsiveScreenWidth(20), height: responsiveScreenHeight(4), alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: "10%" }}>
                                    <Text style={{ color: "black" }}>
                                        View More
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    numColumns={numColumns}
                />
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

export default Home