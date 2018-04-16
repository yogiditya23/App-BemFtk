import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import InputScreen from './InputScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

class Home extends React.Component {
  render() {
    return (
    <HomeScreen />
    );
  }
}

class Input extends React.Component {
  render() {
    return (
    <InputScreen />
    );
  }
}
InputUsers = () => {
  <DetailScreen />
};

export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={this.Home} >
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={this.Input} >
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active onPress={this.Detail} >
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
