import React from 'react'


const CountryList=(props)=>{
   // console.log(props)
   return(
       <div>
          <h3>{props.country.name}
         <button onClick={()=>props.setSearchCountry(props.country.name)}>
                  show
         </button></h3>
       </div>
   )
}

export default CountryList