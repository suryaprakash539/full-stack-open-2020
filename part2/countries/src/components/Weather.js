import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = (props)=>{
     
    const [data,setData] = useState(null)

    useEffect(()=>{
        const params={
            access_key:'397c17a1e85d4c55e588f855d8cb6112',
               query:props.country.capital
        }
         axios
             .get('http://api.weatherstack.com/current',{params})
             .then(response=>{
                 console.log(response.data)
                 setData(response.data.current)
             })
    },[props.country])

    return(
        <div>
            {data ?(
                <div>
                    <h1>Weather in {props.country.capital}</h1>
                    <p>Temperature is {data.temperature}</p>
                    <img src={data.weather_icons} alt='image not found'/>
                    <p>wind speed is {data.wind_speed} mph</p>
                </div>
            ):(
                <>
                <h3>Loading....</h3>
                </>
            )}
        </div> 
    )
    
}

export default Weather