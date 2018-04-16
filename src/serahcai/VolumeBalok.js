import React, { Component } from 'react'; //mengimport componet yang ada pada reactnative kedalam projek
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native'; //mengimport component yang akan digunakan pada project react native

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props)
    this.state = { //meninsialisasi variable
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      keliling: 0,
      luas: 0,
      volume: 0
    };
  }

  render() { //untuk menpilkan semua yang ada di dalamnya
    return (
      <View style={{ flex: 1, backgroundColor: '#FFCA28' }}>  // membuat background Layout dengan style yang diinginkan

        <View style={{ backgroundColor: '#FF6F00' }}> //membuat style dari header layout
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}> //style yang digunakan
            Volume Balok
          </Text> // menutup fungsi text
         </View> // menutup fungsi view style

        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF' }}>
            <TextInput //fungsi untuk membuat textinput yang nantinya akan diinputkan sesuatu
              style={{ height: 40 }} //panjang = 40
              placeholder="Masukkan Panjang" //tulisan yang ada di textinput semebulum tulisan yang asli akan dimasukan
              onChangeText={(panjang) => this.setState({ panjang })} //memberi nilai ke variable
              keyboardType='numeric' //tipe keyboard untuk menginputkan berjenis angka
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}// memberi nilai ke variable
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })} //memberi nilai ke variable
              keyboardType='numeric'
            />

            <Button // fungsi untuk membuat tombol
              color="#FFE082" // warna tombol yang digunakan
              onPress={() => this.setState({ //this.setState yaitu funsi dimana ketika terjadi perubahan data didalamnya, fungsi render dapat terpanggil kembali sehingga tampilan terender sebagaimana mestinya.
                luas: ((2 * (this.state.panjang * this.state.lebar)) + (2 * (this.state.panjang * this.state.tinggi)) + (2 * (this.state.lebar * this.state.tinggi))),
                keliling: (this.state.panjang * 4) + (this.state.lebar * 4) + (this.state.tinggi * 4),
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi) // rumus fungsi matematika.
              })
            } // onPress artinya ketika tombol itu di tekan makan funsgi yang ada di dalamnya akan dijalankan.

              title="Hitung" //tulisan yang ada pada tombol

              accessibilityLabel="Klik untuk menghitung"
            />

       </View>

        <View style={{ margin: 20, backgroundColor: '#FFA000' }}> //view yang ditampilkan pada bagian hasil
          <Text style={{ padding: 10, textAlign:'center' ,fontSize: 20 }}>// view manemapilkan text
              Panjang ={this.state.panjang} {'\n'} //menapilkan data panjang
              Lebar     ={this.state.lebar} {'\n'} // meanmpilkan data lebar
              Tinggi    ={this.state.tinggi} {'\n'}// menampilkan data tinggi
              {'\n'}
              Keliling  ={this.state.keliling} {'\n'} //menampilkan data kelliling
              Luas       ={this.state.luas} {'\n'} //menampilkan data luas
              Volume  ={this.state.volume} // menampilkan data volume
          </Text> //penutup fungsi view text
         </View> //penutup view style
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => App);
