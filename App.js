console.log("✅ THIS IS MY REAL APP");

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NameInputScreen from './app/screens/NameInputScreen';
import RouteSelectScreen from './app/screens/RouteSelectScreen';
import DeliveryProgressScreen from './app/screens/DeliveryProgressScreen';
import DistanceInputScreen from './app/screens/DistanceInputScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NameInput">
        <Stack.Screen name="NameInput" component={NameInputScreen} options={{ title: '이름 입력' }} />
        <Stack.Screen name="RouteSelect" component={RouteSelectScreen} options={{ title: '배송 루트 설정' }} />
        <Stack.Screen name="DeliveryProgress" component={DeliveryProgressScreen} options={{ title: '배송 체크' }} />
        <Stack.Screen name="DistanceInput" component={DistanceInputScreen} options={{ title: '운행 거리' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
