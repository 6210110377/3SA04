import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (

     <View>
        <Text style={styles.BText}>{props.main}</Text>
        <Text>{props.description}</Text>
        <Text>{props.temp} °C </Text>
     </View>
    );
    }
    const styles = StyleSheet.create({    
      backdrop: {
          flexDirection: 'column',
          width: '100%',
          height:'100%'
      },
      BText: {
          fontSize: 40
      },
      BBlack:{
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0,0,0,0.3)',
          height:'50%',
          width:'100%'
      }
    });