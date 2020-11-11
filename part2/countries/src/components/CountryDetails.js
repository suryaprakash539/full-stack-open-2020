import React from 'react'
import Weather from './Weather'

const CountryDetails = (props)=>{
   // console.log(props.country)
  return(
      <>
       <h1>{props.country.name}</h1>
       <h3>capital {props.country.capital}</h3>
       <h3>population {props.country.population}</h3>
       <h2>Languages</h2>
       <ul>
       { 
           props.country.languages.map(language=><li key={language.name}>{language.name}</li>)
       }
       </ul>
       
       <img src={props.country.flag} alt="country image" style={{width:100,height:150}}/>
       <Weather country={props.country}/>
      </>
  )
}

export default CountryDetails