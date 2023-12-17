import React, { useState } from 'react'
import { Image, PermissionsAndroid, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import ImagePicker from 'react-native-image-crop-picker'
import { TextInput } from 'react-native-paper'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'
import { COLORS } from '../../utility/colors/LightColors'


const Feedback = () => {
  const array = [
    {
      id: 1,
      title: 'Report Missing Brand'
    },
    {
      id: 2,
      title: 'Report Data Issue'
    },
    {
      id: 3,
      title: 'Suggest Alternative Brand'
    },
    {
      id: 4,
      title: 'General'
    }
  ]
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('')
  const [barCode, setBarCode] = useState('')
  const [message, setMessage] = useState('')
  const [numImagesSelected, setNumImagesSelected] = useState(0)
  const [images, setImages] = useState();
  const [setLoading, setIsLoading] = useState(false)


  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Access to photos',
            message: 'App would like to access your Gallery',
            buttonNegative: 'Deny',
            buttonPositive: 'Allow',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return granted;
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      return true;
    }
  }
  const GalleryImages = async () => {
    if (numImagesSelected >= 2) {
      ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
      return;
    }
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      ImagePicker.openPicker({
        multiple: false,
      })
        .then((selectedImages) => {
          setImages(selectedImages);
        })
        .catch((error) => console.log(error));
    }
  };

  const onSubmit = async () => {
    console.log('name', name)
    console.log('email', email)
    console.log('occupation', occupation)
    console.log('barCode', barCode)
    console.log('message', message)


    // try {
    //   const formData = new FormData();
    //   formData.append('ticket[requester][name]', name);
    //   formData.append('ticket[requester][email]', email);
    //   formData.append('ticket[subject]', occupation);
    //   formData.append('ticket[comment][body]', data.message);
    //   formData.append('ticket[priority]', 'normal');

    //   if (data.productImage > 0) {
    //     const file = data.productImage[0];
    //     formData.append('file', file);

    //     // Step 1 - Upload the file to Zendesk
    //     const uploadResponse = await fetch(`${ZENDESK_API}/uploads.json?filename=${file.name}`, {
    //       method: 'POST',
    //       body: formData,
    //       headers: {
    //         'Authorization': authHeader
    //       }
    //     });

    //     if (uploadResponse.ok) {
    //       const uploadData = await uploadResponse.json();
    //       const uploadToken = uploadData.upload.token;
    //       formData.append('ticket[comment][uploads][]', uploadToken);

    //       // Step 2 - Create the ticket and attach the uploaded file
    //       const ticketResponse = await fetch(`${ZENDESK_API}/tickets.json`, {
    //         method: 'POST',
    //         body: formData,
    //         headers: {
    //           'Authorization': authHeader
    //         }
    //       });

    //       if (ticketResponse.ok) {
    //         const ticketData = await ticketResponse.json();
    //         console.log('Zendesk ticket created successfully', ticketData);
    //         setSubmissionResult({ success: true });
    //       } else {
    //         console.error('Failed to create Zendesk ticket', ticketResponse.statusText);
    //         setSubmissionResult({ success: false });
    //       }
    //     } else {
    //       console.error('Failed to upload file to Zendesk', uploadResponse.statusText);
    //       // Handle failure (e.g., show error message)
    //     }
    //   } else {
    //     // No file uploaded, create the ticket without attachment
    //     const ticketResponse = await fetch(`${ZENDESK_API}/tickets.json`, {
    //       method: 'POST',
    //       body: formData,
    //       headers: {
    //         'Authorization': authHeader
    //       }
    //     });

    //     if (ticketResponse.ok) {
    //       const ticketData = await ticketResponse.json();
    //       console.log('Zendesk ticket created successfully', ticketData);
    //       setSubmissionResult({ success: true });
    //     } else {
    //       console.error('Failed to create Zendesk ticket', ticketResponse.statusText);
    //       setSubmissionResult({ success: false });
    //     }
    //   }
    // } catch (error) {
    //   console.error('An error occurred:', error);
    //   setSubmissionResult({ success: false });
    //   // Handle error
    // }
  };


  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ height: responsiveScreenHeight(8) }}>
          <Header
            isBack={true}
          />
        </View>
        <View style={{ margin: "5%" }}>
          <Text style={{ color: COLORS.blackColor, fontFamily: "mrt-mid", fontSize: responsiveScreenFontSize(2.6) }}>Contact Us</Text>
        </View>
        <View style={{ margin: "5%" }}>
          <Text style={{ color: COLORS.blackColor, fontFamily: "mrt-rglr", fontSize: responsiveScreenFontSize(2) }}>For feedback, questions, or to report a missing barcode, please submit the form below.</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.box}>
            <TextInput
              style={styles.placeholder1}
              outlineStyle={styles.placeholder2}
              outlineColor='black'
              activeOutlineColor={'black'}
              label="Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              mode="outlined" />
          </View>
          <View style={styles.box}>
            <TextInput
              style={styles.placeholder1}
              outlineStyle={styles.placeholder2}
              outlineColor='black'
              activeOutlineColor={'black'}
              label="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              mode="outlined" />
          </View>
          <View style={{ alignItems: "center", marginTop: responsiveScreenHeight(2) }}>
            <View style={styles.icntxtinput}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={{
                  fontSize: responsiveScreenFontSize(2),
                  color: 'black',
                  fontFamily: "mrt-rglr"
                }}
                selectedTextStyle={{
                  fontSize: responsiveScreenFontSize(2),
                  color: 'black',
                  fontFamily: "mrt-rglr"
                }}
                iconColor={'black'}
                containerStyle={{
                  marginBottom: "50%",
                  backgroundColor: 'white',
                }}
                itemTextStyle={{
                  color: 'black',
                  fontSize: responsiveScreenFontSize(2),
                }}
                data={array}
                labelField="title"
                valueField="title"
                placeholder={'Select One'}
                value={occupation}
                onChange={item => {
                  setOccupation(item.title);
                }}

              />
            </View>
          </View>
          <View style={styles.box}>
            <TextInput
              style={styles.placeholder1}
              outlineStyle={styles.placeholder2}
              outlineColor='black'
              activeOutlineColor={'black'}
              label="Barcode Number EAN (Optional)"
              value={barCode}
              onChangeText={(text) => {
                setBarCode(text);
              }}
              mode="outlined" />
          </View>
          <View style={styles.box}>
            <TextInput
              style={styles.placeholder1}
              outlineStyle={styles.placeholder2}
              outlineColor='black'
              activeOutlineColor={'black'}
              label="Message"
              value={message}
              onChangeText={(text) => {
                setMessage(text);
              }}
              mode="outlined" />
          </View>
        </View>
        <View style={{ marginLeft: responsiveScreenWidth(5) }}>
          <TouchableOpacity
            onPress={() => GalleryImages()}
            style={styles.btn11}>
            {!images ?
              (
                <Text style={styles.btntxt}>Product Image</Text>
              )
              :
              (
                <Image
                  source={{ uri: images.path }}
                  style={{ width: '100%', height: '100%', }}
                  resizeMode='contain'
                />
              )
            }
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: "10%", marginTop: responsiveScreenHeight(2) }}>

          <TouchableOpacity
            onPress={() => { onSubmit() }}
            style={styles.btn2}>
            <Text style={styles.btntxt2}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  placeholder1: {
    width: responsiveScreenWidth(90),
    backgroundColor: "white",
    fontSize: responsiveScreenFontSize(2),
    fontFamily: "mrt-mid",
    color: "black"
  },
  placeholder2: {
    borderColor: "black",
    borderWidth: 1
  },
  box: {
    width: responsiveScreenWidth(90),
    marginTop: "5%",
    alignSelf: "center"
  },
  dropdown: {
    height: responsiveScreenHeight(6.3),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  icntxtinput: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    marginTop: "2%",
  },
  btn11: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(6),
    backgroundColor: "steelblue",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%"
  },
  btntxt: {
    fontSize: 16,
    color: 'white',
    fontFamily: "mrt-mid",
  },
  btn2: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(5),
    backgroundColor: "steelblue",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%"
  },
  btntxt2: {
    fontSize: 16,
    color: 'white',
    fontFamily: "mrt-mid",
  },
});

export default Feedback;