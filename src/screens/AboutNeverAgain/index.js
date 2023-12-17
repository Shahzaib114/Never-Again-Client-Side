import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'
import styles from './style'

const AboutNeverAgain = () => {
  return (
    <View style={styles.mainview}>
        <ScrollView>
     <View style={styles.headerview}>
                <Header
                    isBack={true}
                />
            </View>
            <View style={styles.textview}>
                <Text  style={styles.text1}>Questions?</Text>
                <Text  style={styles.text2}>How many bombs are required for us to realise{'\n'}that as Muslims - they will never be our friends.{'\n'}Never. Ever. They might be colleagues, associates, business partners - but ultimately,{'\n'}they are not our friends..</Text>
            </View>
            <View style={styles.textview}>
                <Text  style={styles.text2}>يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَتَّخِذوا۟ ٱلْيَهُودَ وَٱلنَّصَـٰرَىٰٓ أَوْلِيَآءَ ۘ بعضهُمْ أَوْلِيَآءُ بَعْضٍۢ ۚ وَمَن يَتَوَلهم مّنكُمْ فَإِنَّهُۥ مِنْهُمْ ۗ إِنَّ ٱللَّهَ لا يَهْدى ٱلْقَوْمَ ٱلظَّـٰلِمِينَ</Text>
            </View>
            <View style={styles.textview}>
                <Text  style={styles.text2}>O you who have believed, do not take the Jews and the Christians as allies. They are [in fact] allies of one another. And whoever is an ally to them among you – then indeed, he is [one] of them. Indeed, Allah guides not the wrongdoing people. (Quran 5:51)</Text>
            </View>
            <View style={styles.textview}>
                <Text  style={styles.text1}>Never Again</Text>
                <Text  style={styles.text2}>Welcome to Never Again, your trusted source for truth in the fight against Islamophobia, Muslim oppression. We are a dedicated directory, meticulously curated to empower you with accurate information on companies endorsing Islamophobia, supporting apartheid regimes, supporting racism and </Text>
            </View>
            </ScrollView>
    </View>
  )
}

export default AboutNeverAgain