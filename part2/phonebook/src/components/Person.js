import React from 'react'

const Person=(props)=>{
    const {person}=props
  return(
      <React.Fragment>
        <h3>{person.name} {person.number}</h3>
      </React.Fragment>
  )
}

export default Person