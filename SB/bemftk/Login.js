import React, { Component } from 'react';
import { View,  StyleSheet, Image, Text, Button } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('./bem.png')}
      />
      <Text style={styles.title}> Selamat Datang di App Anggota BEM FTK </Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,

  }

});
