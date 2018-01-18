import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
// import { Divider } from 'react-native-elements';
// import call from 'react-native-phone-call';
// import { phonecall } from 'react-native-communications';

//================= import getDirections from 'react-native-google-maps-directions';

// import { NavigationActions } from 'react-navigation';

// import MapView from 'react-native-maps';
// import Polyline from '@mapbox/polyline';
// import MapViewDirections from 'react-native-maps-directions';
// import GoogleStaticMap from 'react-native-google-static-map';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { deleteDelivery } from '../actions/deliveries';
export default class SelectedDelivery extends Component {






  render() {

    const { delivery } = this.props.navigation.state.params;

    const cords = delivery.address.geometry.coordinates;
    console.warn("CORDS", cords)


    const {goBack} = this.props.navigation;

// const origin = {latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 37.771707, longitude: -122.4053769};

// handleGetDirections = () => {
//   const data = {
//     //  source: {
//     //   latitude: -33.8356372,
//     //   longitude: 18.6947617
//     // },
//     destination: {
//       latitude: cords[0],
//       longitude: cords[1]
//     },
//     params: [
//       {
//         key: "AIzaSyAVg9m8tW8tcNdNgUyS-ytaVHV864QQTiU",
//         value: "w"
//       }
//     ]
//   }

//   getDirections(data);
// }


    return (
      <View style={{flex: 1}}>
      <View style={{ height: 340, backgroundColor: "blue",  top: 20, left: 0}}>

      <MapView style={{height: 340}}

      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>





      </View>
      <TouchableOpacity style={{position: "absolute"}} onPress={()=>{
        deleteDelivery(delivery.id);
        // navigation.navigate('Delivery');

        // goBack('Main');

        // NavigationActions.back({
        //   key: 'Main'
        // })
      }}>
      <Image style={{ transform: [{'translate': [0, 1, 0]}], height: 100, width: 100, top: 290, left: 15,  shadowColor: 'gray', shadowOffset: {width: -0.5, height: 2},shadowOpacity: 1, shadowRadius: 2}} source={require('../assets/delivered.png')}/>
      </TouchableOpacity>

      <Grid>
      <Row style= {{height: 150}}>
      <Col style={{ backgroundColor: 'white', width: 280}}>
        <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#999999', marginTop: 50, marginBottom: 5, marginLeft: 25}}>
        {"ID "  + delivery.humanId}
        </Text>
        <Text style={{ fontFamily: 'Helvetica-Bold', fontWeight: 'bold', fontSize: 20, marginLeft: 25, marginBottom: 5 }}>
                        {delivery.client.name}
                      </Text>
                      <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 18, marginLeft: 25 }}>
                        {delivery.address.street+" "+delivery.address.number+", "+delivery.address.city}
                      </Text>
                      <Text style={{ color: '#f4788b',fontFamily: 'Helvetica-Bold', fontWeight: 'bold', fontSize: 16, marginLeft: 25 }}>
                      {delivery.client.name}
                    </Text>

      </Col>

      <Col style={{flex: 1,
        justifyContent: 'center', backgroundColor: 'white'}}>
        <TouchableOpacity onPress={()=>{
          alert(
          delivery.client.phone

            // {text: 'Cancel', style: 'cancel'},
            // {text: 'Call', onPress: ()=>phonecall(
            //   delivery.client.phone,
            //   true
            // )}
            // { cancelable: true }


        )}


      }
      >
        <Image style={{ marginTop: 40, marginLeft: 20, alignItems: 'center', height: 75, width: 75, shadowColor: 'gray', shadowOffset: {width: -0.5, height: 2},shadowOpacity: 1, shadowRadius: 2 }} source={require('../assets/callClient.png')}/>
        </TouchableOpacity>
      </Col>
      </Row>
      <Row style={{height: 10}}>
        <View style={{ margin: 5, height: 2, width: 365,  backgroundColor: '#dee0dc'}} />
      </Row>
      <Row>
      <Col style={{ width: 210}}>
      <Text style={{ marginTop: 10, marginLeft: 25,
        color: 'black', fontWeight: 'bold', fontSize: 20, fontFamily: 'Helvetica-Bold'}}>{delivery.eta.day}</Text>
        <Text style={{ marginTop: 5, marginLeft: 25,
        color: 'black', fontWeight: 'bold', fontSize: 20, fontFamily: 'Helvetica-Bold'}}>{delivery.eta.date}</Text>
        <Text style={{marginLeft: 25, marginTop: 5, color: '#f4788b', fontSize: 16, fontFamily: 'Helvetica-Bold'}}>
          Estimated arrival: ####
        </Text>
      </Col>

      <Col>
          <View style={{marginLeft: 15, marginTop: 10, backgroundColor: '#f4788b', height: 35, width: 140, shadowColor: 'gray', shadowOffset: {width: -0.5, height: 2},shadowOpacity: 1, shadowRadius: 2


        }}>
            <Text style={{color: 'white', fontFamily: 'Helvetica-Bold', fontSize: 20, marginTop: 5, alignSelf: 'center', textAlignVertical: 'center'}}>
               {delivery.eta.from + " - "+delivery.eta.to}
            </Text>
          </View>
      </Col>
      </Row>

      <Row style={{flex: 1,
        justifyContent: 'center'}}>
          <TouchableOpacity
            style={{marginTop: 15, borderRadius: 50, backgroundColor: '#426190', height: 50, width: 295, alignItems: 'center',
            padding: 10}}
            onPress={()=> getDirections()}
          >
            <Text style={{  marginTop: 3, textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Helvetica-Bold'}}> Open in Google maps </Text>
          </TouchableOpacity>

      </Row>


      </Grid>

      </View>
    )
  }

}


// export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 - 50
  },
});



// <TouchableOpacity onPress={()=> {
//   deleteDelivery(delivery.id);
//   navigation.navigate('Main');
// }}>




// <GoogleStaticMap
// // style={styles.map} {...locationProps}
// latitude={'32.064171'}
// longitude={'34.7748068'}
// zoom={50}
// size={{ width: 300, height: 550 }}

// />
