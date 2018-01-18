import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

// UI Lib
// Container, Content, Form, Button, Text
import { Button } from 'native-base';

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
  }
});


export default class SelectTypeQ extends Component{

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
           <Button style={styles.box}><Text>Multiple Choice</Text></Button>
           <Button style={styles.box}><Text>Text</Text></Button>
           <Button style={styles.box}><Text>Dropdown</Text></Button>
           <Button style={styles.box}><Text>Complete the Sentence</Text></Button>
           <Button style={styles.box}><Text>Yes/ No</Text></Button>
           <Button style={styles.box}><Text>Box 6</Text></Button>
           <Button style={styles.box}><Text>Box 7</Text></Button>
           <Button style={styles.box}><Text>Box 8</Text></Button>
           <Button style={styles.box}><Text>Box 9</Text></Button>
           <Button style={styles.box}><Text>Box 10</Text></Button>
        </View>
      </ScrollView>
    );
  }
}


// const styles = StyleSheet.create({
//   row:{
//     marginTop: 40,
//     flex: 1,
//     flexDirection: 'row',
//   },
//   button: {
//     backgroundColor: 'skyblue',
//     height: 100,
//     marginLeft: 20,
//     width: 158,
//     marginTop: -3,
//   },
//   text: {
//     paddingTop: 2,
//     marginLeft: 27,
//     // position: 'center',
//     textAlign: 'center',
//     fontSize: 22,
//   },
//   item: {
//     flex: 1,
//     height: 160,
//     margin: 1
//   },
//   list: {
//     flex: 1
//   },
// });



// <Container>
// <Content style={styles.header}>
//   <Form style={ styles.row }>

//     <Button style={styles.button}>
//       <Text style={styles.text}>Sign-up</Text>
//     </Button>

//     <Button style={styles.button}>
//       <Text style={styles.text}>Sign-up</Text>
//     </Button>

//     <Button style={styles.button}>
//       <Text style={styles.text}>Sign-up</Text>
//     </Button>

//     <Button style={styles.button}>
//       <Text style={styles.text}>Sign-up</Text>
//     </Button>

//   </Form>
// </Content>
// </Container>
