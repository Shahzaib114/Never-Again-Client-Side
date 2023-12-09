import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'

const UserProfile = ({
    name = 'Gel Gadot',
    role = 'Celerbity',
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../src/assets/images/user.png')}
                    resizeMode='contain'
                    style={styles.imgStyle} />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.titleTxt}>{name}</Text>
                <Text style={styles.descriptionTxt}>{role}</Text>
            </View>
        </View>
    )
}

export default UserProfile