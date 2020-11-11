import React from 'react'
import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const Filter = (props)=>{
    //console.log(props)
    
    const FilteredCountries= props.countries.filter(country=>country.name.toLowerCase().includes(props.searchCountry.toLowerCase())) 
      
    
        return(
            <>
            {FilteredCountries.length>10?(
                <p>too many matches,specify another filter</p>
            ):(FilteredCountries.length===1?
                 <CountryDetails country={FilteredCountries[0]}/>
            :(
               
            FilteredCountries.map(country=><CountryList key={country.name} country={country}
                                             setSearchCountry={props.setSearchCountry}/>) 
            )

            )}
            
            </>
        )
    
   
}

export default Filter