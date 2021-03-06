import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { Button, Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { Grid, Col } from 'react-native-elements';
import { deleteDelivery } from '../actions/deliveries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  box: {
    margin: 10,
    width: Dimensions.get('window').width -25,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  header: {
    backgroundColor: '#2cb7a1',

  },
  text: {
    // marginTop: 5,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },

  day: {
    flex: 1,
    paddingTop: 71,
    textAlignVertical: 'top',
    marginBottom: 100,
    backgroundColor: '#2cb7a1',
    borderColor: '#2cb7a1',
    borderWidth: 5,
    borderRadius: 10
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#426190',
    marginBottom: 20
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // backgroundColor: 'green'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  }
});

  class Main extends Component {


    render() {
      const { deliveries, deleteDelivery } = this.props;

      // console.warn(deliveries.length);
      // header {backgroundColor: '#426190', marginBottom: 22}
      // Text{marginTop: 5, fontFamily: 'Helvetica-Bold', fontWeight: 'bold',fontSize: 20, color: 'white'}

      return (

        <ScrollView>
          <Container style={{marginTop: 20}}>

          <View style={styles.navBar}>
            <View style={styles.leftContainer}>
              <Image source={require('../assets/Logo.png')} style={ {height: 40, width: 25, marginLeft: 5}}/>

            </View>
            <Text style={styles.text}>
              Future Orders
            </Text>
            <View style={styles.rightContainer}>
            <Image source={require('../assets/drawerRight.png')} style={{ marginTop: 5, height: 40, width: 25, marginRight: 5}}/>
            </View>
          </View>





            <Content>
              {
                deliveries.map( delivery => { return (
                  <TouchableHighlight key={delivery.id} onPress={() => { deleteDelivery(delivery.id)}}>
                  <Card  style={{marginLeft: 10, marginRight: 10}}>
                  <CardItem header style={{backgroundColor: '#2cb7a1', flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center'}}>

                    <Text style={[styles.leftContainer, {


                       color: 'white', fontWeight: 'bold', fontSize: 18, fontFamily: 'Helvetica-Bold'}]}>{delivery.eta.day+"\n"+delivery.eta.date}</Text>

                      <Text style={{
                        alignSelf: 'flex-end',
                         color: 'white', fontWeight: 'bold', fontSize: 18, fontFamily: 'Helvetica-Bold'}}>{"Arrive between\n    "+delivery.eta.from+ " - "+delivery.eta.to}</Text>



                    </CardItem>





                  <CardItem>
                    <Body style={{flex: 1,
                      flexDirection: 'column',
                      alignItems: 'flex-start'}}>
                      <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9, color: '#999999', marginBottom: 3}}>
                        {"ID " + delivery.humanId}
                      </Text>
                      <Image style={{alignSelf: 'flex-end', height: 80, width: 80}} source={require('../assets/roundLogo.png')}/>
                      <Text style={{ fontFamily: 'Helvetica-Bold', fontWeight: 'bold', fontSize: 20 }}>
                        {delivery.client.name}
                      </Text>
                      <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 18 }}>
                        {delivery.address.street+" "+delivery.address.number+", "+delivery.address.city}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                  </CardItem>
                  </Card>
                  </TouchableHighlight>

                )  })
                            }
                  </Content>

          </Container>
        </ScrollView>
      );
    }

}


const mapStateToProps = state => ({
  deliveries: state.deliveries
});

const mapDispatchToProps = dispatch => ({
  deleteDelivery: bindActionCreators(deleteDelivery, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);


// render() {

//   const { deliveries, deleteDelivery } = this.props;

//   console.warn(deliveries.length);

//   return (
//     <ScrollView style={styles.scrollContainer}>
//       <View style={styles.container}>
//          {
//            deliveries.map( delivery => {
//               return <View><Button style={styles.box}>
//               <Text style={styles.day}>{delivery.client.name}</Text></Button>
//               <Button onPress={() => {
//                 console.warn(delivery.id);
//                 deleteDelivery(delivery.id);
//               }}><Text>Delete</Text></Button></View>
//             })
//           }
//       </View>
//     </ScrollView>
//   );
// }


// Google Key:

// AIzaSyAVg9m8tW8tcNdNgUyS-ytaVHV864QQTiU
