import React from 'react'
import CountryDetails from './CountryDetails'

const Filter = (props)=>{
   // console.log(props)
    
    const FilteredCountries= props.countries.filter(country=>country.name.toLowerCase().includes(props.searchCountry.toLowerCase())) 
      
    
        return(
            <>
            {FilteredCountries.length>10?(
                <p>too many matches,specify another filter</p>
            ):(FilteredCountries.length===1?
                 <CountryDetails country={FilteredCountries[0]}/>
            :(
                <ul>
                     {FilteredCountries.map(country=><li key={country.name}>{country.name}</li>)}
                </ul>
              
            )

            )}
            
            </>
        )
    
   
}

export default Filter