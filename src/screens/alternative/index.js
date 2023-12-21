import { useLazyQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { getCategories, useBrands } from '../../api/hooks'
import { exploreApprovedCategories } from '../../api/schema/queries'
import ExploreView from '../../components/explore'
import Header from '../../components/header/Header'
import UserProfile from '../../components/userDataComp/UserData'
import { COLORS } from '../../utility/colors/LightColors'

const Alternative = () => {

  const navigation = useNavigation();

  const [data, setData] = useState([])
  const [myLatestBrands, setMyLatestBrands] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoriesLoader, setCategoriesLoader] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const { loading, error, categoriesData } = getCategories();
  const { isloading, iserror, ApprovedData } = useLazyQuery(exploreApprovedCategories);
  const [fetchCategory, { categoryLoading, categoryData }] = useLazyQuery(exploreApprovedCategories)
  let { brandsLoading, brandsError, brandsData, refetch } = useBrands({
    orderBy: "createdAt_DESC",
    value: "",
    first: 50,
    skip: 0,
  });

  useEffect(() => {
    setData(categoriesData?.categories)
  }, [categoriesData, loading])

  const nav = async (item) => {
    let categoryId = item?.id
    let value = ""
    setIsLoading(true)
    const res = await fetchCategory({
      variables: {
        categoryId: categoryId,
      },
    })
    setMyLatestBrands(res?.data?.category?.approvedBrands)
    setIsLoading(false)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ height: responsiveScreenHeight(8) }}>
        <Header
          isBack={true}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {data.length === 0 ?
          (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <ActivityIndicator size={'large'} />
            </View>
          )
          :
          (
            <View style={{
              marginVertical: '5%', flexWrap: "wrap",
              flexDirection: "row",
            }}>
              {data?.map((item, index) => (
                < View key={index} style={{
                  marginVertical: "5%",
                  width: '29%',
                  marginHorizontal: '2%',
                }}>
                  <ExploreView
                    key={index}
                    imageSource={item?.icon?.url}
                    displayText={item.name}
                    iconName='certificate'
                    onPress={() => {
                      setModalVisible(true)
                      nav(item)
                    }
                    }
                  />
                </View>

              ))}
            </View>
          )
        }

      </ScrollView >
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
      >
        <View style={{ flex: 1 }}>
          {isLoading ?
            (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={COLORS.blackColor} />
              </View>
            )
            :
            (
              <View style={{
                alignSelf: "center"
              }}>

                {myLatestBrands?.length != 0 ?
                  (
                    <>
                      <Text style={[styles.titleText2, { marginVertical: responsiveScreenHeight(2) }]}>
                        Alternative Brands
                      </Text>
                      <ScrollView showsHorizontalScrollIndicator={false}>
                        {myLatestBrands?.map((item, index) => (
                          <Pressable

                            key={index} style={{
                              backgroundColor: COLORS.primaryColor,
                              marginBottom: responsiveScreenFontSize(0.5),
                              width: '100%',
                              alignSelf: 'center',
                              borderRadius: responsiveScreenFontSize(1)
                            }}
                            onPress={() => {
                              setModalVisible(false)
                              navigation.navigate('ApproveBrandDetails', {
                                brandId: item.id
                              })
                            }}
                          >
                            <UserProfile
                              name={item.name}
                              role={item.subTitle}
                              navigateIcon={true}
                              img={item?.icon?.url}
                            />
                          </Pressable>
                        ))}
                      </ScrollView>
                    </>
                  )
                  :
                  (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.titleText}>
                        No Alternative Brands
                      </Text>
                    </View>
                  )
                }
              </View>
            )
          }
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{
              backgroundColor: 'red',
              position: 'absolute', bottom: responsiveScreenHeight(5), width: '90%', alignSelf: 'center',
              justifyContent: 'center', alignItems: 'center', padding: responsiveScreenFontSize(2), borderRadius: responsiveScreenFontSize(1)
            }}>
            <Text style={styles.titleText}>
              Back
            </Text>
          </Pressable>
        </View>
      </Modal >
    </View >
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
    borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },
  itemContainer2: {
    margin: 6,
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: responsiveScreenWidth(90),
    borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },
  titleText: {
    fontSize: responsiveScreenFontSize(2),
    color: "black",
    fontFamily: 'mrt-rglr'
  },
  titleText2: {
    fontSize: responsiveScreenFontSize(2),
    color: "black",
    fontFamily: 'mrt-mid'
  },
  titleText3: {
    fontSize: responsiveScreenFontSize(2),
    color: "black",
    fontFamily: 'mrt-rglr'
  },
  packageDetailsContainer: {
    margin: responsiveScreenWidth(4),
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // For Android
    margin: responsiveScreenWidth(4)
  },
  loader: {
    minHeight: responsiveScreenHeight(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%"
  },
  flatlist: {
    flex: 1,
    alignItems: "center",
    marginTop: "5%"
  },

});

export default Alternative