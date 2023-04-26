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

     <Image style={styles.logo} source={require('./img/skoobicon.png')} />

     <input type='text' placeholder='Email' style={styles.caixa}/>
     <input type='text' placeholder='Senha' style={styles.caixa}/>

     <Text style={styles.esquecisenha}> Esqueci minha senha</Text>

     <input type='submit' value='ENTRAR' style={styles.botao1}/>

     <Text style={styles.ou}>ou</Text>

     <Text style={styles.facebook}>Entrar com o Facebook</Text>

    <View style={styles.dupla}>
     <Text style={styles.cadastro}>Não tem cadastro?</Text>
     <input type='submit' value='Cadastre-se' style={styles.botao2}/>
     </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8
  },
  logo: {
    width:120,
    height:120,
    flexDirection:'row',
    alignSelf:'center',
    marginBottom:26
  },
  caixa: {
    padding:12,
    borderRadius:20,
    border:'2px solid #c1c2c1',
    margin:6,
    width:230,
    flexDirection:'row',
    alignSelf:'center',
    fontSize:15
  },
  esquecisenha: {
    color:'#0b86d0',
    fontSize: 15,
    flexDirection:'row',
    alignSelf:'center',
    marginTop:9,
    fontWeight:'bold'
  },
  botao1: {
    borderRadius:22,
    padding:10,
    width:245,
    border:'none',
    backgroundColor:'#0b86d0',
    color:'#ffff',
    fontSize:14,
    flexDirection:'row',
    alignSelf:'center',
    marginTop:50
  },
  ou:{
    felxDirection:'row',
    alignSelf:'center',
    marginTop:11,
    fontWeight:'bold'
  },
  facebook: {
    felxDirection:'row',
    alignSelf:'center',
    marginTop:5,
    fontWeight:'bold',
    color:'#0b86d0'
  },
  cadastro: {
    fontWeight:'bold',
    flexDirection:'column',
    alignSelf:'center'
  },
  botao2:{
    backgroundColor:'#ffff',
    borderRadius:20,
    width:110,
    padding:7,
    border:'2px solid #0b86d0',
    color:'#0b86d0',
    fontWeight:'bold'
  },
  dupla: {
    flexDirection:'row',
    alignSelf:'center',
    gap:30,
    marginTop:60
  }
});
