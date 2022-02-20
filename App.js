import React,{useState} from "react";

import {Text,StyleSheet,View,TouchableOpacity, StatusBar,Image} from 'react-native'

//! creating a method named as App since we are import "App" from "./App" in index.js
 const App =() =>{

  //! declaring a state
  const [randomColour,setRandomColour] = useState('rgb(36,56,89)');
  
  //! defining a method to change a colour.

  const changeBackGround =()=>{
    let colourChanger = 'rgb('+
    Math.floor(Math.random()*256)
    +
    ','
    +
    Math.floor(Math.random()*256)
    +
    ','
    +
    Math.floor(Math.random()*256)
    +
    ')';

    setRandomColour(colourChanger);
  }

  //! method to reset the colour.
  const Reset =()=>{
    setRandomColour("rgb(0,0,0)");
  }
   
  return(
    <>
    <StatusBar backgroundColor={randomColour} />
    <View style={[styles.container,{backgroundColor:randomColour}]}>
      <Image style={styles.cat} source={require('./cat.png')}/>
      <TouchableOpacity>

    <Text style={styles.text} onPress={changeBackGround}>Change colour</Text>
    <Text style={[styles.text , {marginTop:10}]} onPress={Reset}>Reset</Text>
      </TouchableOpacity>
    </View>
    </>
  )
 }

 export default App;


 //! Creating a style object.

 const styles = StyleSheet.create({
   container:{

    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(11, 135, 160)'
   },
   text:{
     paddingVertical:20,
     paddingHorizontal:40,
     color:'white',
     fontSize:33,
     backgroundColor:'rgb(119, 19, 195)',
     borderRadius:25,
     textAlign:'center'
   },
   cat:{
     width:250,
     height:200,
     
   }
 })