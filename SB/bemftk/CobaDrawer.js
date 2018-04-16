import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Icon, styles, header
} from 'react-native';
import { Container, Content, Header} from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import Author from './Author';
import CobaHeader from './CobaHeader';


const Drawer = DrawerNavigator({
  Home: { screen: TabNavigator },
  Author: { screen: Author }
});

export default class CobaDrawer extends React.Component {

    render() {
      return (

        <Header />,
        <Author />,
        <Drawer />


      );
    }
  }
