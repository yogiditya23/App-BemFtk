import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert, Body
  } from 'react-native';

export default class FormDaftar extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhone: '',
      TextInputPassword: ''
    }
  }

  InputUsers = () => {
    const {TextInputName} = this.state;
    const {TextInputEmail} = this.state;
    const {TextInputPhone} = this.state;
    const {TextInputPassword} = this.state;

    fetch('http://api.ifreethink.net/Z151505002/insert.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
        name: TextInputName,
        email: TextInputEmail,
        phone:TextInputPhone,
        password:TextInputPassword,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      })
  }

  // ViewDataUsers = () => {
  //   this.props.navigation.navigate('DataView')
  // }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          onChangeText = {TextInputValue => this.setState ({TextInputName: TextInputValue})}
          placeholderTextColor="#9E9E9E"
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            onChangeText = {TextInputValue => this.setState ({TextInputEmail: TextInputValue})}
            placeholderTextColor="#9E9E9E"
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Phone"
              keyboardType='numeric'
              onChangeText = {TextInputValue => this.setState ({TextInputPhone: TextInputValue})}
              placeholderTextColor="#9E9E9E"
              />

            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              onChangeText = {TextInputValue => this.setState ({TextInputPassword: TextInputValue})}
              secureTextEntry={true}
              placeholderTextColor="#9E9E9E"
              />

            <TouchableOpacity activeopacity = {.4} style={styles.button} onPress={this.InputUsers}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeopacity = {.4} style={styles.button}>
              <Text style={styles.buttonText}>View Data Users</Text>
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:45,
    marginRight:45
  },
  inputBox:{
    width:250,
    backgroundColor:'#EEEEEE',
    borderRadius:25,
    paddingHorizontal:13,
    fontSize:16,
    color:'#9E9E9E',
    marginVertical:5,
    padding:5
  },
  button:{
    width:250,
    backgroundColor:'#BDBDBD',
    borderRadius:25,
    marginVertical:3,
    paddingVertical:3
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#424242',
    textAlign:'center'
  }
});
