import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const UserProfile = ({
    name = 'Gel Gadot',
    role = 'Celerbity',
    img = 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    imgContainerProp,
    containerProp,
    navigateIcon = false,
}) => {
    return (
        <View style={[containerProp, styles.container]}>
            <View style={[{ imgContainerProp }, styles.imageContainer]}>
                <Image
                    source={{ uri: img }}
                    resizeMode='contain'
                    style={styles.imgStyle} />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.titleTxt}>{name}</Text>
                <Text style={styles.descriptionTxt}>{role}</Text>
            </View>
            {navigateIcon &&
                <View style={{ alignSelf: 'center' }}>
                    <MaterialIcons
                        name="navigate-next"
                        size={responsiveFontSize(5)}
                        color="black" />
                </View>
            }
        </View>
    )
}

export default UserProfile