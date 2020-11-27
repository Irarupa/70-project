import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';


export default class WriteStory extends React.Component {
  render() {
        return(
      <View>
        <TextInput
        style={styles.inputBox}
        placeholder="Student Id"
        />
      </View> )   
        } 
        }
      
    
  
  const styles=StyleSheet.create({
    scanButton:{
      backgroundColor:"lightblue",
      margin:10,
      padding:10,
      width: "30%",
      height: 60,
      borderRadius: 10
      
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    buttonText:{
      textAlign:"center",
      color:"black",
      fontWeight: "bold",
      fontSize: 20
      
    },
    inputBox:{
      width: 200,
      height: 400,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },


  })
