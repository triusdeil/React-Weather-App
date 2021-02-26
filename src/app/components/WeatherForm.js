import React from 'react';
import WeatherInfo from './WeatherInfo';

const WeatherForm = props =>{
    return(
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
                <div className='form-group'>
                    <input type='text' name='city' placeholder='Your city name' className='form-control' autoFocus/>
                </div>
                <div className='form-group'>
                    <input type='text' name='country' placeholder='Your Country Name' className='form-control'/>
                </div>
                <button className='btn btn-success btn-block'>
                    Get Weather
                </button>
            </form>
        </div>
    )
}
export default WeatherForm