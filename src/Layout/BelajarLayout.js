import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (

      <View style={styles.containerMain}>
        <View style={styles.box1}>
        <Text style = {styles.text1}>Pendidikan Teknik Infomatika</Text>
        </View>
        <View style =  {styles.box2}>
        <Text style = {styles.text2}>Sliider</Text>
        </View>
        <View style =  {styles.box3}>
        <Text style = {styles.text3}>kotak</Text>
        </View>
        <View style =  {styles.box4}>
        <Text style = {styles.text4}>#JaenKuliahdiPTI</Text>
        </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00BFFF',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#0000BF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  box2: {
    flex: 2,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  box3: {
    flex: 2,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: '#0000BF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text1: {
    fontSize: 25,
    color: 'white'
  },
  text2: {
    fontSize: 20,
    color: 'black'
  },
  text3: {
    fontSize: 20,
    color: 'black'
  },
  text4: {
    fontSize: 25,
    color: 'white'
  }

});
