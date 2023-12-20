import * as Location from 'expo-location';
import styles from './style';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';

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
        <View style={styles.mainview}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerview}>
                    <Header
                        isBack={true}
                    />
                </View>
                <View style={{ margin: "5%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr', fontSize: responsiveFontSize(2) }}>Your Current Location:
                        <Text style={{ color: "black", fontFamily: 'mrt-mid' }}> Islamabad, Pakistan</Text>
                    </Text>
                </View>

                <View style={{ margin: "5%" }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                        Brands Found Near Your Location!
                    </Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{
                        borderRadius: 10,
                        width: responsiveScreenWidth(90),
                        overflow: 'hidden',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.5, // Set the shadow opacity (adjust as needed)
                        shadowRadius: 5,
                        elevation: 5,
                    }}>
                        <MapView
                            userInterfaceStyle={'light'}
                            toolbarEnabled={true}
                            ref={mapRef}
                            style={
                                styles.mapstyle
                            }
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
                                <View style={{ width: responsiveScreenWidth(10), height: responsiveScreenHeight(8) }}>
                                    <Image
                                        source={require('../../assets/images/locationpin.png')}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode='contain'
                                    />
                                </View>
                            </Marker>
                        </MapView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default NearMe;