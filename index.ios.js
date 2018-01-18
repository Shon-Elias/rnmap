import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';
// import App from './example/App';
import MapView from 'react-native-maps';

// import App from './App';
// import { Provider } from 'react-redux';
// import store from './app/store';


// AppRegistry.registerComponent('supApp', () => App);

AppRegistry.registerComponent('supApp', () => {
  return class extends Component {
    render(){
      return (
        <View style={{height: 400, width: 400}}>
          <MapView style={{height: 400, width: 400}}
            provider='google'
            region={{
              latitude: 32.06279178347238,
              longitude: 34.77044105529785,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          <MapView.Marker

          coordinate={{
            latitude: 32.06279178347238,
            longitude: 34.77044105529785,
            // latitudeDelta: 0.015,
            // longitudeDelta: 0.0121,
          }}
          pinColor='#426190'
          />
          </MapView>
        </View>
      );
    }
  }
});






// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class supApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('supApp', () => supApp);
