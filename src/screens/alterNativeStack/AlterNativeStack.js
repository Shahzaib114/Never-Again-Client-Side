import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Alternative from '../alternative';
import ApproveBrandDetails from '../approveBrandDetails/ApproveBrandDetails';


const stack = createNativeStackNavigator();
const ApprovedBrandStack = () => {
    return (
        <stack.Navigator initialRouteName='Alternatives' screenOptions={{ headerShown: false }}>
            <stack.Screen name='Alternatives' component={Alternative} />
            <stack.Screen name='ApproveBrandDetails' component={ApproveBrandDetails} />
        </stack.Navigator>
    )
}
export default ApprovedBrandStack