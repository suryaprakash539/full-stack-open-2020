import React from 'react'

const Filter = (props)=>{
  //  console.log(props)
    return(
      <>
      <p>filter shown with</p>
       <input
              value={props.text} 
              onChange={props.handleTextChange}/>
      </>  
    )
}

export default Filter