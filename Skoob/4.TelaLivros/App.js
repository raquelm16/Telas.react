import * as React from 'react';
import { Text, View, StyleSheet, Image, Divider } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>

{/* ------ NAV BAR ------ */}
    <View style={styles.nav1}>
      <Image style={styles.seta1} source={require('./img/seta1.png')} />

    <View style={styles.cinza}>
      <Image style={styles.search} source={require('./img/search.png')} />
      <Image style={styles.points} source={require('./img/points.png')} />
      </View>

    </View>

<View style={styles.nav2}>
{/* ------ MEUS LIVROS SECTION ------ */}
    <View style={styles.meuslivros}>
      <Text style={styles.meus}>Meus </Text>
      <Text style={styles.livros}>Livros </Text>
      <Image style={styles.seta2} source={require('./img/seta2.png')}/>
    </View>

{/* ------ PERFIL ------ */}
<View style={styles.perfiltodo}>

    <View style={styles.ladoperfil}>
      <Text style={styles.n}>728</Text>
      <Text style={styles.pages}>PÁGINAS LIDAS</Text>
    </View>  
      <Image style={styles.user} source={require('./img/user.jpg')}/>

</View>

</View>

     <View style={styles.linha}></View> {/* Linha */}


{/* ------ BOOKMARKS ------ */}
<View style={styles.todosbookmark}>
      <Image style={styles.bookmark} source={require('./img/broxo.png')}/>
      <Image style={styles.bookmark} source={require('./img/bverde.png')}/>
      <Image style={styles.bookmark} source={require('./img/bamarelo.png')}/>
      <Image style={styles.bookmark} source={require('./img/bazul.png')}/>
      <Image style={styles.bookmark} source={require('./img/blaranja.png')}/>
      <Image style={styles.bookmark} source={require('./img/bpreto.png')}/>
</View>

      <View style={styles.linha}></View> {/* Linha */}


<View style={styles.areacinza}> {/* area cinza */}
      <Text style={styles.todos}>TODOS 6</Text>


{/* ------ LIVROS ------ */}
<View style={styles.div}>

<View style={styles.todoslivro}>
      <Image style={styles.livro} source={require('./img/book1.jpg')}/>
      <Image style={styles.livro} source={require('./img/book2.jpg')}/>
      <Image style={styles.livro} source={require('./img/book3.jpg')}/>
      <Image style={styles.livro} source={require('./img/book4.jpg')}/>
      <Image style={styles.livro} source={require('./img/book5.jpg')}/>
      <Image style={styles.livro} source={require('./img/book6.jpg')}/>
</View>

{/*------ BOOKMARKS ON BOOKS ------*/}
<View style={styles.todosmark}>            
<Image style={styles.mark} source={require('./img/markazul.png')}/>
<Image style={styles.mark} source={require('./img/markazul.png')}/>
<Image style={styles.mark} source={require('./img/markverde.png')}/>  
<Image style={styles.mark} source={require('./img/markverde.png')}/>
<Image style={styles.mark} source={require('./img/markamarelo.png')}/>
<Image style={styles.mark} source={require('./img/marklaranja.png')}/>
</View>

</View>


</View> {/*area cinza*/}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  seta1: {
    width:25,
    height:25,
    flexDirection:'row',
    marginLeft:5
  },
  search:{
    width:25,
    height:25,
    flexDirection:'row',
  },
  points: {
    width:25,
    height:25,    
    flexDirection:'row',
    marginRight:10
  },
  cinza: {
    flexDirection:'row',
    gap:20
  },
  nav1:{
    flexDirection:'row',
    gap:20,
    marginTop:-120,
    justifyContent:'space-between',
  },

  meus:{
    fontSize:20,
    color:'#595a5b'
  },
  livros:{
    fontSize:20
  },
  seta2:{
    width:20,
    height:20,
    marginTop:5
  },
  meuslivros:{
    flexDirection:'row',
    selfAlign:'flex-start',
    margin:15,
    marginLeft:10
  },

  n: {
    fontSize:16,
    flexDirection:'row',
    alignSelf:'flex-end',
    fontWeight:'bold'
  },
  pages:{
    fontSize:12,
    flexDirection:'row',
    alignSelf:'flex-end'
  },
  user:{
    width:60,
    height:60,
    borderRadius:60/2,
    flexDirection:'column',
    alignSelf:'center',
    marginTop:-14,
    marginLeft:10,
    marginRight:10
  },
  ladoperfil: {
    flexDirection:'column'
  },
  perfiltodo: {
    flexDirection:'row',
    alignSelf:'flex-end',
  },
  nav2: {
    flexDirection:'row',
    justifyContent:'space-between',
    gap:0,
    marginTop:20,
    marginBottom:12
  },

  linha: {
    border:'1px solid #c1c2c1',
  },

  bookmark: {
    width:35,
    height:35
  },
  todosbookmark:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:8,
    marginBottom:8,
    marginRight:5,
    marginLeft:5
  },
  
  todos:{
    margin:13,
    marginLeft:15,
    color:'#595a5b'
  },



  livro: {
    width:90,
    height:130,
    marginBottom:5,
    borderRadius:5,
  },
  todoslivro: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    gap:15
  },

  mark: {
    width:90,
    height:130,
    marginBottom:5,
    borderRadius:5,
  },

  todosmark:{
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    zIndex:2,
    marginTop:-285,
    gap:15
  }
});
