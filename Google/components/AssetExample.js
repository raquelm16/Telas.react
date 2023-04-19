import * as React from 'react';
import { Text, View, StyleSheet, Image, Nav} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     <Image style={styles.nav} source={require('../img/camera.jpg')}/>
    <Image style={styles.nav} source={require('../img/pontos.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'flex-end',
    flexDirection:'row',
    padding: 24,
  },
   nav:{
    width:50,
    height:40,
  },
 // paragraph: {
 //   margin: 24,
 //   marginTop: 0,
 //   fontSize: 14,
 //   fontWeight: 'bold',
 //   textAlign: 'center',
 // },
});
