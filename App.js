import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Components/MainScreen';
import AlertScreen from './Components/AlertScreen';
import QrcodeScreen from './Components/QrcodeScreen';
import Search from './Components/AppFoods/SearchScreen';
import GiftScreen from './Components/AppFoods/GiftScreen';
import GetOrMeetScreen from './Components/AppFoods/GetOrMeetScreen';
import OneManScreen from './Components/AppFoods/OneManScreen';
import Korean from './Components/AppFoods/FoodScreen';
import ListDetail from './Components/ListDetail';

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="Qrcode" component={QrcodeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Gift" component={GiftScreen} />
        <Stack.Screen name="GetOrMeet" component={GetOrMeetScreen} />
        <Stack.Screen name="OneMan" component={OneManScreen} />
        <Stack.Screen name="Korean" component={Korean} options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            textAlign: 'center'
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerRight: () => (
            <View></View>
          )
        })} />

        <Stack.Screen name="ListDetail" component={ListDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;