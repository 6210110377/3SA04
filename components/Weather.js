import React, { useState, useEffect } from 'react'
import {Text,ImageBackground,StyleSheet,View} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=4dff062a8a9cacb5ea0afad9e9b69914`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
       
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
       