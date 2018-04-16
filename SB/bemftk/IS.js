import React from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class InputScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = { nama: '', };
    this.state = { nim: '', };
    this.state = { jurusan: '', };
    this.state = { jabatan: '', };
  }
render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box2}>

           <View style={{marginTop:10, margin: 10, padding:10, backgroundColor: 'white'}}>
              <View style={{ margin: 2, padding: 1, alignItems: 'center' }}>
                  <Text>Masukan Nama</Text>
                      <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(nama) => this.setState({ nama })}
              placeholder="Masukkan Nama"
             />
        </View>

         <View style={{ margin: 5, padding: 1, alignItems: 'center' }}>
        <Text>Masukan NIM</Text>
        <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(nim) => this.setState({ nim })}
              placeholder="Masukkan NIM"
             />
        </View>

        <View style={{ margin: 5, padding: 1, alignItems: 'center' }}>
       <Text>Masukan Jurusan</Text>
       <TextInput
             style={{ height: 40, width: 250 }}
             onChangeText={(nim) => this.setState({ nim })}
             placeholder="Masukkan Jurusan"
            />
       </View>

         <View style={{ margin: 5, padding: 1, alignItems: 'center' }}>
        <Text>Masukan Jabatan</Text>
        <TextInput
              style={{ height: 40, width: 250 }}
              onChangeText={(jabatan) => this.setState({ jabatan })}
              placeholder="Masukkan Jabatan"
             />
        </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => {
            //* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Coba', {
              nama: this.state.nama,
              nim: this.state.nim,
              jurusan: this.state.jurusan,
              jabatan: this.state.jabatan,
            });
          }}

          title="Simpan "
          color="#00CED1"

        />

        </View>


          </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
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
