import * as React from 'react';
import { Text, View, StyleSheet, Form, Label, Input } from 'react-native';
import Constants from 'expo-constants';



// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Crie a sua conta!
      </Text>
      <Text style={styles.paragraph}>
        É rápido, fácil e grátis.
      </Text>

     <View style={styles.forms}>
      <label>
      <Text style={styles.titleform}>Dados de acesso </Text>
      </label>
  <label>
    <Text style={styles.texto}>{'\n'}Email {'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme seu Email{'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Senha{'\n'}</Text>
    <input type="text" placeholder="Senha" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme a senha{'\n'}</Text>
    <input type="text" placeholder="Confirme a senha" style={styles.input}/>
  </label>
  <Text>{'\n'}</Text>
  <input type="submit" value="Salvar" style={styles.button}/>
</View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin:5,
    alignSelf:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop:17
  },
  paragraph: {
    fontSize:14,
    marginTop: 3,
    marginBottom: 14
  },
  forms: {
    flex:1,
    flexDirection:'column'
  },
  titleform: {
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 10
  },
  texto:{
    padding: 0,
    fontWeight:'600'
  },
  input: {
    padding: 5,
    width: 270,
    marginBottom: -10,
    marginTop:5,
    borderRadius: 6,
    border: '1.5px solid #c1c2c1',
    color: '#c1c2c1',
    flexDirection:'row',
    alignSelf:'center'
  },
  button: {
    marginTop: 15,
    alignSelf: 'center',
    width: 270,
    backgroundColor:'#0b86d0',
    borderRadius: 20,
    border:'none',
    padding:6,
    color:'#fff',
  }
});
