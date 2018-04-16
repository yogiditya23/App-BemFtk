import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';



export default class HomeScreen extends React.Component {

  render() {
    return (
       <View style={styles.containerMain}>

       <Container>

         <Content>
           <Button block
           onPress={() => this.props.navigation.navigate('Detail')}
           >
             <Text>Details</Text>
           </Button>
           <Button block success
           onPress={() => this.props.navigation.navigate('InputData')}
           >
             <Text>Input Data Anggota</Text>
             
           </Button>
           <Button block success
           onPress={() => this.props.navigation.navigate('LoginForm')}
           >
             <Text>Input Data Anggota</Text>
           </Button>
           </Content>
      </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'aqua',
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
