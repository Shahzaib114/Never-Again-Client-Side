import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'
import ExploreView from '../../components/explore'

const Alternative = () => {

  const array = [
    {
      id: 0,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 1,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 2,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 3,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 4,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 5,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 6,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 7,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 8,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 9,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 10,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },
    {
      id: 11,
      img: (require('../../../src/assets/images/gal-gadot.jpg'))
    },


  ]
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ height: responsiveScreenHeight(8) }}>
        <Header
          isBack={true}
        />
      </View>

      <ScrollView>

        <View style={{ margin: '5%', flexWrap: "wrap", flexDirection: "row" }}>
          {array.map((item, index) => (
            <View key={index} style={{ marginVertical: "5%", marginHorizontal: "2%" }}>
              <ExploreView key={index} imageSource={item.img} />
            </View>

          ))}
        </View>

      </ScrollView>
    </View>
  )
}

export default Alternative