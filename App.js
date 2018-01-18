// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button
// } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Splash from './app/screens/Splash';
// import Main from './app/screens/Main';
// import SelectedDelivery from './app/screens/SelectedDelivery';


const Navigation = DrawerNavigator({
  Home: {
    screen: Splash,
  }
  // ,
  // Main: {
  //   screen: Main,
  // },
  // Delivery: {
  //   screen: SelectedDelivery,
  // }
}
// ,
// {
//   drawerPosition: 'right'
// }
);

export default Navigation;

"react": "^16.2.0",
"react-native": "^0.42.0",
"react-native-maps": "^0.15.2",
