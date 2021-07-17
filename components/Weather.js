import React, { useState } from 'react'
import {Text,ImageBackground,StyleSheet,View} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description', 
        temp: 0
    }) 
    return (
        <View>
             <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <View style={styles.BBlack}>
             <Text>Zip Code is {props.zipCode} </Text>
             <Forecast {...forecastInfo} />
        </View>
        </ImageBackground>
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
       