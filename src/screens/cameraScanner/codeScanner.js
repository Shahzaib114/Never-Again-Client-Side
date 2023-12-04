import {
    Camera,
    CameraType
} from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { scale } from 'react-native-size-matters';
export default function CodeScanner() {

    //defining all the states and require functions
    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();


    //functions for onpress or rendering

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Linking.openURL(data)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}
                backgroundColor={'grey'}
            />

            <Camera style={{ flex: 1 }} type={type}
                onBarCodeScanned={(txt) => {
                    console.log('bar code scannerd')
                }}
                ratio='16:9'
                responsiveOrientationWhenOrientationLocked
            >
                <View style={{ flex: 1 }}>
                    <View style={styles.topView}>
                        <View>
                            <Text style={styles.topContainerItems}>
                                First Icon
                            </Text>
                        </View>
                        <View style={styles.topSecondView}>
                            <Text style={[styles.topContainerItems]}>
                                Second Image
                            </Text>
                            <Text style={styles.topContainerItems}>
                                Third Image
                            </Text>
                        </View>
                    </View>
                    <View style={styles.scannerTxtContainer}>
                        <Text style={styles.scannerTxt}>
                            Scan Barcode / QR Code
                        </Text>
                    </View>
                    <View style={styles.frameContainer}>
                        <Image source={require('../../images/frame.png')}
                            resizeMode='contain'
                            style={styles.frameImg}
                        />
                    </View>
                </View>
            </Camera>
        </View>
    );
}

//stylesheet for styling above Design
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center',
        marginVertical: scale(10)
    },
    topFirstView: {

    },
    topContainerItems: {
        color: 'black',
        margin: scale(10)
    },
    topSecondView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topSecondImg: {

    },

    topThirdView: {

    },
    topThirdImg: {

    },
    scannerTxtContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '20%'
    },
    scannerTxt: {
        color: 'red',
        fontSize: scale(25)
    },
    frameContainer: {
        marginVertical: '10%'
    },
    frameImg: {
        alignSelf: 'center',
    }

});
