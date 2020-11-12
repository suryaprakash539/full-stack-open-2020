import React from 'react'
import Person from './Person'

const Persons=(props)=>{
    console.log(props)
    const {persons,text,handleDelete} = props
    let filteredPersons = persons.filter(person=> person.name.toLowerCase().includes(text.toLowerCase()))
  return (
      <>
       {filteredPersons.map(person=><Person key={person.number} 
                                            person={person}
                                            handleDelete={handleDelete}  />)}
      </>
  )
}

export default Persons