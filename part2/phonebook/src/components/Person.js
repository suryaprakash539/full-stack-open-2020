import React from 'react'

const Person=(props)=>{
    const {person,handleDelete}=props
  return(
      <React.Fragment>
        <h3> {person.name} {person.number} 
        <button onClick={()=>handleDelete(person.id,person.name)}>delete</button>
        </h3>
        
      </React.Fragment>
  )
}

export default Person