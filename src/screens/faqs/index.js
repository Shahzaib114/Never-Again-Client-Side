import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'

const Faqs = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <ScrollView>
     <View style={{ height: responsiveScreenHeight(8) }}>
                <Header
                    isBack={false}
                />
            </View>
            <View style={{margin:"5%"}}>
                <Text  style={{ color: "black", fontFamily: 'mrt-mid',fontSize:20 }}>FAQs</Text>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16,marginTop:"5%" }}>Questions?</Text>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16,marginTop:"3%" }}>How many bombs are required for us to realise{'\n'}that as Muslims - they will never be our friends.{'\n'}Never. Ever. They might be colleagues, associates, business partners - but ultimately,{'\n'}they are not our friends..</Text>
            </View>
            <View style={{margin:"5%"}}>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16 }}>Questions?</Text>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16,marginTop:"3%" }}>How many bombs are required for us to realise{'\n'}that as Muslims - they will never be our friends.{'\n'}Never. Ever. They might be colleagues, associates, business partners - but ultimately,{'\n'}they are not our friends..</Text>
            </View>
            <View style={{margin:"5%"}}>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16 }}>Questions?</Text>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16,marginTop:"3%" }}>How many bombs are required for us to realise{'\n'}that as Muslims - they will never be our friends.{'\n'}Never. Ever. They might be colleagues, associates, business partners - but ultimately,{'\n'}they are not our friends..</Text>
            </View>
            <View style={{margin:"5%"}}>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16 }}>Questions?</Text>
                <Text  style={{ color: "black", fontFamily: 'mrt-rglr',fontSize:16,marginTop:"3%" }}>How many bombs are required for us to realise{'\n'}that as Muslims - they will never be our friends.{'\n'}Never. Ever. They might be colleagues, associates, business partners - but ultimately,{'\n'}they are not our friends..</Text>
            </View>
            </ScrollView>
    </View>
  )
}

export default Faqs