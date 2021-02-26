import React, {Component} from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import {WEATHER_KEY} from './keys'
class App extends Component{

    //states
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }
    
    //Get Weather
    getWeather =async e =>{
        //cancel refresh page
        e.preventDefault()
        //extract city and country from weatherForm
        const {city, country} = e.target.elements
        //save properties
        const cityvalue = city.value;
        const countryvalue = country.value;

        if(city.value && country.value){
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue},${countryvalue}&appid=${WEATHER_KEY}&units=metric`;
            //consulta con fetch y obtener la respuesta y posteriormente convertirla
            const response = await fetch(API_URL);
            const data = await response.json();
        
        
            //estableciendo datos en el estado
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error:null
        })
        } else{
            this.setState({error: 'Please Enter a city and country'})
        }
        
        
    }
     /*...utiliza los puntos para enviar todo el estado y que el componente pueda leerlo */
    render(){
        return (
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                       
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;