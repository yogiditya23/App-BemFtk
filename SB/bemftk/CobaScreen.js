import React from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class CobaScreen extends React.Component {

 render() {
   const { params } = this.props.navigation.state;
   const nama = params ? params.nama : null;
   const nim = params ? params.nim : null;
   const jurusan = params ? params.jurusan : null;
   const jabatan = params ? params.jabatan : null;
 //const levelIcon = require('./img/user.png');
   return (
     <View style={styles.containerMain}>
         <View style={styles.box2}>

       <View style={{marginTop:10, margin: 10, padding:10, backgroundColor:'white'}}>
       <View style={styles.button}>
         <Image
             //source={require('./img/user.png')}
             style={{margin: 5, width: 50, height: 50 }}
          />

         <View style={styles.button1}>
         <Text> Nama: {JSON.stringify(nama)} </Text>
         </View>
         <View style={styles.button1}>
         <Text> NIM: {JSON.stringify(nim)} </Text>
         </View>
         <View style={styles.button1}>
         <Text> NIM: {JSON.stringify(jurusan)} </Text>
         </View>
         <View style={styles.button1}>
         <Text> Jabatan: {JSON.stringify(jabatan)} </Text>
         </View>
      </View>
     </View>

         <Button
         title="Go back"
         onPress={() => this.props.navigation.goBack()}
       />
     </View>
     </View>
   );
 }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'darkturquoise',
  },
  box2: {
    flex: 2.5,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'aqua',
     alignItems: 'center',
  },
  box5: {
    flex: 0.5,
    backgroundColor: 'aqua',
     alignItems: 'flex-start',

  },
  button: {
    width: 250,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  button1: {
    width: 250,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'pink',
    flexDirection: 'column'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
});
