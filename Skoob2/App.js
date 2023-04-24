import * as React from 'react';
import { Text, View, StyleSheet, Image, Input } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.skoobicon} source={require('./img/skoobicon.PNG')} />
    <Image style={styles.skoobtitle} source={require('./img/skoobtitle.PNG')}/>

    <input type='submit' value='Entrar' style={styles.button}/>

<View style={styles.iconsview}>
    <Image style={styles.icons} source={require('./img/bookmark.png')} />
    <Image style={styles.icons} source={require('./img/star.png')} />
    <Image style={styles.icons} source={require('./img/pen.png')} />
</View>
      <Text style={styles.p1}>
        Organize suas leituras
      </Text>

      <Text style={styles.p2}>
      O melhor app. Completo e grátis!
      </Text>

<View style={styles.fotoview}>
    <Image style={styles.foto} source={require('./img/pessoa2.jpeg')} />
    <Image style={styles.foto} source={require('./img/pessoa1.png')} />
    <Image style={styles.foto} source={require('./img/pessoa3.jpg')} />
</View>

    <Text style={styles.p3}>
    <b>A maior comunidade</b> {'\n'} Mais de 7 milhões de leitores
    </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
  },
  skoobicon:{
    width: 150,
    height: 150,
    flexDirection:'row',
    alignSelf:'center'
  },
  skoobtitle: {
    width:160,
    height:60,
    flexDirection:'row',
    alignSelf:'center',
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    padding:7,
    width:220,
    fontSize:17,
    backgroundColor:'#ffff',
    color:'#0b86d0',
    fontWeight:500,
    border: '2px solid #0b86d0',
    flexDirection:'row',
    alignSelf:'center'
  },
  iconsview:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop: 17
  },
  icons: {
    width:45,
    height:40,
    margin:10
  },
  p1: {
    margin: 24,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p2: {
    fontSize:17,
    textAlign:'center',
    marginTop:-22
  },
  fotoview:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:18
  },
  foto: {
    width:50,
    height:50,
    borderRadius:50/2,
    border:'3px solid #0b86d0',
    margin:8
  },
  p3: {
    textAlign:'center',
    fontSize:17,
    marginTop:15
  }
});
