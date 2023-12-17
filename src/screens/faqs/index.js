import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';
import { COLORS } from '../../utility/colors/LightColors';
import styles from './style';


const Faqs = () => {
    return (
        <View style={styles.mainview}>
            <ScrollView>
                <View style={styles.headerview}>
                    <Header
                        isBack={true}
                    />
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text1}>FAQs</Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>Where can I download the app?</Text>
                </View>
                <View>
                    <Text style={styles.text3}>You can download the app from the Google Play{'\n'}  Store for Android users and the App Store for iOS users.</Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>What are the requirements for web, camera, and location permissions?</Text>
                </View>
                <View>
                    <Text style={styles.textcentre}>
                        The app requires access to your device's camera{'\n'}  and location for barcode scanning and identifying{'\n'}  the origin of products. Web access ensures seamless functionality.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>How do I submit a bad result or missing brand/barcode?</Text>
                </View>
                <View style={styles.bottomtextview}>
                    <Text style={styles.textcentre}>
                        You can easily provide feedback by visiting the '/contact'{'\n'} section within the app and submitting your feedback{'\n'} regarding any inaccurate information or{'\n'} missing brands/barcodes.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>How does the barcode scanner work?</Text>
                </View>
                <View style={styles.bottomtextview}>
                    <Text style={styles.textcentre}>
                        The barcode scanner employs machine learning and{'\n'}  a proprietary algorithm that compares a vast{'\n'}  database of brands, corporations, and products.{'\n'}  It processes an average of 2500 products daily,{'\n'}  completing calculations in around 1250 seconds each day.{'\n'} This results in approximately 7500 API requests daily.{'\n'}{'\n'}

                        With 0.09 API requests processed per second on{'\n'} average, the application dynamically learns, incorporates{'\n'} user feedback, and enhances accuracy, achieving an{'\n'} approximate 89% accuracy rate in identifying{'\n'} products and their origins.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>Who develops the application?</Text>
                </View>
                <View style={styles.bottomtextview}>
                    <Text style={styles.textcentre}>
                        The application is developed and maintained by a{'\n'} global team of volunteers committed to promoting{'\n'} ethical consumerism and enabling individuals{'\n'} to make informed choices while shopping.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>What is the vision of the application?</Text>
                </View>
                <View style={styles.bottomtextview}>
                    <Text style={styles.textcentre}>
                        The application aims to be a comprehensive super{'\n'} app empowering not just specific groups but all{'\n'} individuals to shop ethically. It encourages{'\n'} the use of alternative brands and shopping avenues,{'\n'} fostering a conscious and informed consumer culture.
                    </Text>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text2}>How is the database structured?</Text>
                </View>
                <View style={styles.bottomtextview}>
                    <Text style={styles.textleft}>
                        The database is structured hierarchically:
                    </Text>
                    <Text style={styles.textleft}>
                        1.Products and brands are assigned to a{'\n'}   specific company.
                    </Text>
                    <Text style={styles.textleft}>
                        2.Each company is further assigned to{'\n'}    a corporation.
                    </Text>
                    <Text style={styles.textleft}>
                        For example, Twirl Chocolate is a product owned by{'\n'}Twirl, which is owned by Cadbury, further owned by Mondelez. This hierarchical structure enables efficient organization and analysis of ownership relations within{'\n'}the database.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Faqs;