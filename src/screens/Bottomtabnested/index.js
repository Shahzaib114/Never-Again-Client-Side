import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home';
import BrandDetails from '../brandsdetails';
import Proof from '../proof';
import People from '../people';
import Faqs from '../faqs';


const stack = createNativeStackNavigator();
const NestedNavigator = () => {
    return (
        <stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
            <stack.Screen name='home' component={Home} />
            <stack.Screen name='BrandDetails' component={BrandDetails} />
            <stack.Screen name='Proof' component={Proof} />
            <stack.Screen name='People' component={People} />
            <stack.Screen name='Faqs' component={Faqs} />
        </stack.Navigator>
    )
}
export default NestedNavigator