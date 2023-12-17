import { useLazyQuery } from '@apollo/client';
import { useIsFocused } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
    Camera,
    CameraType
} from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    AppState,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { GoUPCApiKey, api_base_url } from '../../../env';
import { scanBrands } from '../../api/schema/queries';
import { COLORS } from '../../utility/colors/LightColors';

export default function CodeScanner() {
    const [type, setType] = useState(CameraType.back);
    const [refetchQuery, { scanLoading, scanError, scanData }] = useLazyQuery(scanBrands);

    const [modalVisible, setModalVisible] = useState(false)
    const [startScan, setStartScan] = useState(false)
    const [scanResults, setScanResults] = useState()

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

    const decodeBarcode = async (barcodeNumber) => {
        const url = `${api_base_url}${barcodeNumber}?key=${GoUPCApiKey}`;

        try {
            const response = await fetch(url, { method: "get" });
            const data = await response.json();
            const productData = data.product;
            if (productData !== null) {
                return productData;
            } else {
                return false
            }
        } catch (error) {
            console.log("Error decoding barcode:", error);
            return false

        }
    };

    const onScannedProductDetails = async (decodedProductBrand) => {
        await refetchQuery({
            barcode: decodedProductBrand?.ean ? [decodedProductBrand?.ean] : [],
            name: decodedProductBrand?.name || "",
            brand: decodedProductBrand?.brand || "",
        });
    };


    const handleReadCode = useCallback(
        async (data) => {
            let numRegex = /^[0-9]+$/;
            if (numRegex.test(data.data)) {
                setModalVisible(true)
                setStartScan(true)
                let scannedNumber = data.data
                console.log('scannedNumber', scannedNumber)
                const result = await refetchQuery({
                    variables: {
                        barcode: [parseFloat(scannedNumber ?? 0)]
                    }
                });
                console.log('ressulttt', result.data)
                if (result?.data?.brands && result.data?.brands?.length === 0) {
                    console.log('not in my server')
                    const productData = await decodeBarcode(data.data);
                    console.log('productData', productData)
                    await onScannedProductDetails(productData);
                    setScanResults(productData)
                    setStartScan(false)
                    setScanned(false)
                } else {
                    console.log('got from my server')
                    setScanResults(result?.data?.brands[0])
                    setStartScan(false)
                    setScanned(false)
                }
            } else {
                Alert.alert('Scanning Failed', 'Please Scan Bar Code', [
                    {
                        text: 'Ok',
                        onPress: () => setScanned(false),
                        style: 'Ok',
                    },
                ])
            }
        },
        []
    );
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}
            />
            <Modal
                visible={modalVisible}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.whiteColor }}>
                    {startScan ?
                        <View style={{
                            height: scale(300), justifyContent: 'center', alignItems: 'center', width: scale(300),
                        }}>
                            <Text style={styles.scannerTxt}>
                                Scanning
                            </Text>
                            <ActivityIndicator size={'large'} color={COLORS.greenColor}
                                style={{ backgroundColor: COLORS.whiteColor }} />
                        </View>
                        :
                        <>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                {scanResults?.icon?.url ?
                                    <Image
                                        source={{ uri: scanResults?.icon?.url }}
                                        resizeMode='contain'
                                        style={{
                                            width: responsiveScreenWidth(30),
                                            height: responsiveScreenHeight(13.5),
                                            alignSelf: 'center',
                                            borderRadius: responsiveFontSize(20)
                                        }}
                                    />
                                    :
                                    scanResults?.imageUrl &&
                                    <Image
                                        source={{ uri: scanResults?.imageUrl }}
                                        resizeMode='contain'
                                        style={{
                                            width: responsiveScreenWidth(30),
                                            height: responsiveScreenHeight(13.5),
                                            alignSelf: 'center',
                                            borderRadius: responsiveFontSize(20)
                                        }}
                                    />
                                }
                                <Text style={[styles.scannerTxt, { color: COLORS.blackColor }]}>
                                    Scanned Successfully
                                </Text>
                                <Text style={styles.titleTxt}>
                                    name:<Text style={styles.descriptionTxt}> {scanResults?.name ? scanResults?.name : 'NaN'}{'\n'}</Text>
                                    Brand: <Text style={styles.descriptionTxt}>{scanResults?.brand ? scanResults?.brand : 'NaN'}{'\n'}</Text>
                                    Category: <Text style={styles.descriptionTxt}>{scanResults?.category ? scanResults?.category : 'NaN'}{'\n'}</Text>
                                    Description: <Text style={styles.descriptionTxt}>{scanResults?.description ? scanResults?.description : 'NaN'}{'\n'}</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    setStartScan(true)
                                    setModalVisible(false)
                                }}
                                style={{ padding: responsiveFontSize(1), backgroundColor: COLORS.greenColor, borderRadius: responsiveFontSize(0.5) }}
                            >
                                <Text style={styles.titleTxt}>
                                    Scan Again
                                </Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>
            </Modal >

            {
                camera.hasCameraPermission ?
                    (
                        focus && !modalVisible &&
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
                            style={[StyleSheet.absoluteFill]}
                        >
                            <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>

                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image source={require('../../assets/images/frame.png')}
                                        style={styles.frameImg}
                                    />
                                </View>
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
        </View >
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
        fontFamily: 'mrt-mid',
        fontSize: scale(20),
        color: COLORS.greenColor
    },
    titleTxt: {
        fontFamily: 'mrt-mid',
        fontSize: scale(15),
        color: COLORS.blackColor
    },
    descriptionTxt: {
        fontFamily: 'mrt-rglr',
        fontSize: scale(10),
        color: COLORS.blackColor
    },

    frameContainer: {
        marginVertical: '10%',
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
