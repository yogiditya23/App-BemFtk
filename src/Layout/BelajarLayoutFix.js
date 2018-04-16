import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayoutFix extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center' }} >
          Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box5}>
          <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center' }} >
          #JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#446CB3',

  },
  box2: {
    flex: 2,
    backgroundColor: '#1E88E5',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  box3: {
    flex: 1,
    backgroundColor: '#64B5F6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: '#64B5F6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  kotak: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box5: {
    flex: 1,
    backgroundColor: '#446CB3',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  text: {
    fontSize: 25
  }

});
