import { useIsFocused } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
    Camera,
    CameraType
} from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    Alert,
    AppState,
    Image,
    Linking,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';

export default function CodeScanner() {
    //defining all the states and require functions
    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const focus = useIsFocused()
    const [camera, setCamera] = useState({
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    });


    useEffect(() => {
        if (!permission) {
            requestCameraPermission()
        }
    }, [hasPermission])


    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
            if (AppState.currentState === 'active') {
                setScanned(false)
            }
        });

        return () => {
            subscription.remove();
        };
    }, []);


    const requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setCamera(prevState => ({ ...prevState, hasCameraPermission: status === 'granted' }));
    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const handleReadCode = useCallback(
        async (data) => {
            Alert.alert('QR/Bar Code Scanned', data.data, [
                {
                    text: 'Cancel',
                    onPress: () => setScanned(false),
                    style: 'cancel',
                },
                {
                    text: 'Go To Link', onPress: () => {
                        Linking.openURL(data.data).catch((e => {
                            Alert.alert('Could Not Open The QR/Bar Code Link for', data.data, [
                                {
                                    text: 'Ok', onPress: () => {
                                        setScanned(false)
                                    }
                                },
                            ]);
                        }))
                    }
                },
            ]);
        },
        []
    );
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}
            />

            {camera.hasCameraPermission ?
                (
                    focus &&
                    <Camera
                        barCodeScannerSettings={{
                            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.code128],
                        }}
                        onBarCodeScanned={(txt) => {
                            if (!scanned) {
                                setScanned(true)
                                handleReadCode(txt)
                            }
                        }}
                        type={type}
                        ratio='16:9'
                        style={[StyleSheet.absoluteFill, { backgroundColor: 'red' }]}
                    >
                        <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Image source={require('../../assets/images/frame.png')}
                                style={styles.frameImg}
                            />
                            <Pressable
                                onPress={() => { toggleCameraType() }}
                                style={styles.rotationImgOpacity}
                            >
                                <Image source={require('../../assets/images/switchCamera.png')}
                                    style={styles.rotationImg}
                                />
                            </Pressable>
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
        marginVertical: '10%',
        backgroundColor: 'red'
    },
    frameImg: {
        width: scale(300),
        height: scale(300),
        alignSelf: 'center',
    },
    rotationImgOpacity: {
        width: scale(50),
        height: scale(50),
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        right: responsiveFontSize(0.1),
        margin: responsiveFontSize(7),
        backgroundColor: 'white',
        borderRadius: responsiveFontSize(1),
        padding: responsiveFontSize(1),

    },
    rotationImg: {
        width: '100%',
        height: '100%',


    }

});
