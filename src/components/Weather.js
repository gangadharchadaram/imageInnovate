import React from 'react'
import '../styles/Weather.css'
import { useState } from 'react'
import axios from 'axios'
import Time from './Time'
import Bg from '../assets/background1.jpg';

function Weather(){
    const [data, setData] = useState({
     
    })
    const [name, setName] = useState('');

    const handleClick = () => {
        if(name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1635890035cbba097fd5c26c8ea672a1`;
            axios.get(apiUrl)
            .then(res => {
               setData({...data, celcius: res.data.main.temp - 273.15, name: res.data.name, timezone: res.data.timezone, humidity: res.data.main.humidity, speed: res.data.wind.speed, pressure: res.data.main.pressure, description: res.data.weather[0].description})
               console.log(res)
            })
            .catch(err => console.log(err))
        }
        // console.log(handleClick)
    }
    return (
    <>
        <div className='container' style={{ backgroundImage: `url(${Bg})`}}>
            <div className='head-container'>
                <h1 className='title'>Weather in your city</h1>
                <div className='weather'>
                    <div className='search'>
                        <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                        <button><img src='/Images/search.png' alt='' onClick={handleClick} /></button>   
                    </div>
                </div>                
            </div>
                <div className='weather1'>
                    <div className='winfo'>
                        <div className='top'>
                            <img src='/Images/sun-clouds.png' alt=''  className='icon'/>
                            <h3 className='top-desc'>{data.description}</h3>
                        </div>
                        
                        <Time />
                        <h1>{Math.round(data.celcius)}°C</h1>
                        <h2>{data.name}</h2>
                        <div className='details'>
                            <div className='col'>
                                <img src='/Images/humidity.png' alt='' />
                                <div className='humidity'>
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>humidity</p>
                                </div>
                            </div>
                            <div className='col'>
                                <img src='/Images/wind.png' alt='' />
                                <div className='wind'>
                                    <p>{Math.round(data.speed)}km/h</p>
                                    <p>Wind</p>
                                </div>
                            </div>
                            <div className='col'>
                                <img src='/Images/presure.png' alt='' />
                                <div className='wind'>
                                    <p>{Math.round(data.pressure)}</p>
                                    <p>pressure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
        
    )
}

export default Weather