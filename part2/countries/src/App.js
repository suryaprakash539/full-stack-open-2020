 import React, {useState, useEffect } from 'react'
 import Filter from './components/Filter'
 import axios from 'axios'

 const App=()=>{

    const [countries,setCountries] = useState([])
    const [searchCountry,setSearchCountry] = useState('')

    useEffect(()=>{
       // console.log('effect')
        axios
           .get('https://restcountries.eu/rest/v2/all')
           .then(response=>{
               setCountries(response.data)
           })
    },[])

    const handleInputChange=(event)=>{
        setSearchCountry(event.target.value)
    }

     return(
         <React.Fragment>
 findCountries:   <input 
                    value={searchCountry}
                    onChange={handleInputChange}/>

           <Filter 
                  countries={countries}
                  searchCountry={searchCountry}
                  setSearchCountry={setSearchCountry}/>
         </React.Fragment>
     )
 }

 export default App

