import React from 'react'
import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Enter city name'/>
        <img src={search} alt='' />
      </div>
      <img src={clear} alt="Clear Weather" className='weather-icon' />
      <p className='Temperature'>16°C</p>
      <p className='location'>london</p>
      <div className='weather-data'>
        <div className="col">
            <img src={humidity} alt='' />
            <div>
                <p>91%</p>
                <span>Humidity</span>
            </div>
        </div>

        <div className="col">
            <img src={wind} alt='' />
            <div>
                <p>3.6 Km/hr</p>
                <span>Wind Speed</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
