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
     <Card>
        <AssetExample />
      </Card>
      <Image style={styles.logo} source={require('./img/google.png')} />
     <input style={styles.input} type="text" placeholder="Search or type URL" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
 // paragraph: {
 //   margin: 24,
 //   fontSize: 18,
 //   fontWeight: 'bold',
 //   textAlign: 'center',
 // },
  logo:{
    width: 200,
    height: 67,
    alignSelf:'center',
  },
  input:{
    height:30,
    width:280,
    alignSelf:'center',
    marginTop:40,
  },
});
