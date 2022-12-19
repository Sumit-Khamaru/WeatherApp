import React from 'react'
import sun from './logo/sun.png';
import cloudy from './logo/cloudy.png';
import rainy from './logo/rain.png';
import './Weather.css';
const Weather = (props) => {

    let logo;
    // const {weather} = props;
    if(props.weather === 'sunny') {
        logo = sun;
    }
    else if(props.weather === 'cloudy') {
        logo = cloudy;
    }
    else if(props.weather === 'rainy') {
        logo = rainy;
    }
  return (
    <img  src={logo} alt="Logo" />
  )
}

export default Weather
