import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Image,
        TextInput, TouchableOpacity, Text, Button,
        KeyboardAvoidingView,
        TouchableWithoutFeedback, Keyboard, AppRegistry, Header } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CobaDrawer from './CobaDrawer';
import Loader from './Loader';


 class Home extends React.Component  {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.key}>
      <TouchableWithoutFeedback style={styles.container}onPress={Keyboard.dismiss}>
      <View style={styles.container1}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('./bem.png')}
      />
      </View>
        <Text style={styles.title}> Selamat Datang di App Anggota BEM FTK </Text>
      <View style={styles.container}>
      <TextInput
      placeholder="NIM"
      onSubmitEditing={() => this.passwordInput.focus()}
      style={styles.input}
      keyboardType='numeric'
      />
      <TextInput
      placeholder="Password"
      secureTextEntry
      ref={(input) => this.passwordInput = input}
      style={styles.input}
      />

      <Button
            title='LOGIN'
            color="#ADD8E6"
            onPress={() => this.props.navigation.navigate('Details')}

      />
      </View>
      </View>
      </TouchableWithoutFeedback >
      </KeyboardAvoidingView>
    );
  }
}

class Details extends React.Component {
  render() {
    return (
      <CobaDrawer />

    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
  },
  {
    navigationOptions: {
      header: false,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class LoginForm extends React.Component {
  render() {

    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  key: {
    flex: 20,
  },
  container: {
  padding: 30
  },
  container1: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    color: '#2C3E50',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 18,

  },
input: {
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 10,
  color: '#2C3E50',
  paddingHorizontal: 30
},
buttonContainer: {
  backgroundColor: '#2980b9',
  paddingVertical: 30
},
buttonText: {
  textAlign: 'center',
  color: '#2C3E50',
  fontWeight: '700'
}

});

AppRegistry.registerComponent('BUtton and handluing tpuche', () => LoginForm);
