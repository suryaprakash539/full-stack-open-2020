import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = (props)=>{
    // console.log(props)
     return (
       <>
        {props.parts.map(part=> <Part key={part.id} 
                                name={part.name}
                                exercises={part.exercises}/>)}  
          <Total parts={props.parts}/>                                          
       </>
     )
   }

   export default Content