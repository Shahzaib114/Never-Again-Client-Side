import { useIsFocused } from '@react-navigation/native';
import {
    Camera,
    CameraType
} from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
    Image,
    Linking,
    PermissionsAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { scale } from 'react-native-size-matters';
import Header from '../../components/header/Header';
export default function CodeScanner() {

    //defining all the states and require functions
    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const focus = useIsFocused()

    useEffect(() => {
        if (focus) {
            if (!permission) {
                console.log('camera ermisioos', permission)
                requestCameraPermission()
            }
        }
    }, [focus, hasPermission])

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                setHasPermission(true)
            } else {
                console.log('Camera permission denied');
                setHasPermission(false)
            }
        } catch (err) {
            console.warn(err);
        }
    };


    const reqCameraPermission = async () => {
        const perm = PermissionsAndroid.PERMISSIONS.CAMERA
        console.log('perm', perm)
        const granted = await requestPermission()
        console.log('granted', granted)
        setHasPermission(granted.granted)
    }

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
            />

            {hasPermission ?
                (
                    <Camera style={{ flex: 1 }} type={type}
                        onBarCodeScanned={(txt) => {
                            console.log('bar code scannerd')
                        }}
                        ratio='16:9'
                        responsiveOrientationWhenOrientationLocked
                    >
                        <View style={{ flex: 1, }}>
                            <View style={styles.topView}>
                                <Header
                                    isBack={false}
                                    isScanner={false}
                                />
                            </View>
                            <View style={styles.scannerTxtContainer}>
                                <Text style={styles.scannerTxt}>Scan Barcode / QR Code</Text>
                            </View>
                            <View style={styles.frameContainer}>
                                <Image source={require('../../assets/images/frame.png')}
                                    resizeMode='contain'
                                    style={styles.frameImg}
                                />
                            </View>
                        </View>
                    </Camera>
                )
                :
                (
                    <TouchableOpacity
                        onPress={() => { requestCameraPermission() }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>
                            Please Allow Camera Permissions First
                        </Text>
                    </TouchableOpacity>
                )
            }

        </View>
    );
}

//stylesheet for styling above Design
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topView: {
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
        marginVertical: '20%',
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
