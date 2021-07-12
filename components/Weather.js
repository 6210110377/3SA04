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
             <Text>Zip Code is {props.zipCode} </Text>
             <Forecast {...forecastInfo} />
        </ImageBackground>
        </View>
       
        );
    }
    const styles = StyleSheet.create({
        backdrop: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
    });
       