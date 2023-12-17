import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const NearMe = () => {
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.003372395186460153,
        longitudeDelta: 0.0019201263785362244,
    });
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log('location allloewed', location)
            const crd = location.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0016185867283340372,
                longitudeDelta: 0.0009847059845924377,
            });
            setLocation(location);
        })();
    }, []);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const mapRef = useRef()
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ height: responsiveScreenHeight(8) }}>
                    <Header
                        isBack={true}
                    />
                </View>
                <View style={{ margin: "5%" }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                        Brands Found Near Your Location!
                    </Text>
                </View>
                <MapView
                    userInterfaceStyle={'light'}
                    toolbarEnabled={true}
                    ref={mapRef}
                    style={{
                        width: "95%",
                        alignSelf: 'center',
                        height: responsiveScreenHeight(40),
                    }}
                    zoomTapEnabled
                    zoomEnabled={true}
                    showsUserLocation={false}
                    initialRegion={position}
                    showsCompass={true}
                    showsMyLocationButton={false}
                    scrollEnabled={true}
                    rotateEnabled={true}
                    maxZoomLevel={17.5}
                    region={position}
                    mapPadding={{ top: 0, right: 0, left: 0 }}
                    loadingEnabled
                >
                    <Marker
                        // title={destinationLabel}
                        coordinate={position}
                    >
                        {/* <View style={{ width: scale(25), height: scale(35) }}>
                            <Image
                                source={require('../../../assets/Images/mapIcon.png')}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode='contain'
                            />
                        </View> */}
                    </Marker>


                </MapView>
                {/* </TouchableOpacity> */}

                <View style={{ margin: "10%" }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default NearMe;