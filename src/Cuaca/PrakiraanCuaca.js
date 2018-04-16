import React, { Component } from 'react';
import {

  Text, Style, TextInput,
  View, Appstate
} from 'react-native';

export default class PrakiraanCuaca extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      kota: '',
      temp: '',
      forecast: ''

    };
  }
  getWeather = () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=8f3a004af8aa43d2716a0faca1222bea&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      }
    );
  };

  render() {
    return (
      <View>
      <Text> Masukan Nama Kota </Text>
      <TextInput
        onSubmitEditing={
          (event) => this.setState({ kota: event.nativeEvent.text })}
      />

        <Text> Kota : {this.state.kota}</Text>
        <Text> Current state is: {this.state.getWeather}</Text>
        </View>
    );
  }
}
