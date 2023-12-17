import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CelebrityDetails from '../celebrtityDetails/celebrityDetails';
import Sellouts from './sellouts/Sellout';


const stack = createNativeStackNavigator();
const SelloutStack = () => {
    return (
        <stack.Navigator initialRouteName='Sellout' screenOptions={{ headerShown: false }}>
            <stack.Screen name='Sellout' component={Sellouts} />
            <stack.Screen name='CelebrityDetails' component={CelebrityDetails} />
        </stack.Navigator>
    )
}
export default SelloutStack