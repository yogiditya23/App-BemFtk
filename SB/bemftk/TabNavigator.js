import React from 'react';
import { Text, View, Icon } from 'react-native';
import { TabNavigator } from 'react-navigation';
import InputScreen from './InputScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuSamping from '../MenuSamping';
import Header from '../Header';
import Footer from '../Footer';
import SettingsScreen from '../SettingsScreen';
import CobaHeader from './CobaHeader';
// Version can be specified in package.json

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Footer headerText="Header" />
        <HomeScreen />
      </View>
    );
  }
}
class Detail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DetailScreen />
      </View>
    );
  }
}

class InputData extends React.Component {
  render() {
    return (
    <InputScreen />
    );
  }
}

const Tab = TabNavigator({

  Home: { screen: HomeScreen },
  InputData: { screen: InputScreen },
  Detail: { screen: DetailScreen },
},
{
  swipeEnabled: false
}
);


export default class CobaDrawer extends React.Component {

    render() {
      return (
        <CobaHeader />,
        <Tab />

      );
    }
  }
