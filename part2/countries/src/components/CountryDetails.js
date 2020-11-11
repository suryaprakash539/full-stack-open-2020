import React from 'react'

const CountryDetails = (props)=>{
    console.log(props.country)
  return(
      <>
       <h1>{props.country.name}</h1>
       <h3>capital {props.country.capital}</h3>
       <h3>population {props.country.population}</h3>
       <h2>Languages</h2>
       <ul>
       { 
           props.country.languages.map(language=><li>{language.name}</li>)
       }
       </ul>
       
       <img src={props.country.flag} style={{width:100,height:150}}/>
      </>
  )
}

export default CountryDetails