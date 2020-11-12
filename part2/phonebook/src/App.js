import React,{useState,useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import personService from './services/persons'

const App =()=>{
    const [persons,setPersons] = useState([])

    const [newNumber,setNewNumber] = useState('')
    const [newName,setNewName] = useState('')
    const [text,setNewText] = useState('')

    useEffect(()=>{
        console.log('effect')
        personService
           .getAll()
           .then(initialPersons=>{
            setPersons(initialPersons)
           })

    },[])

    const handleFormSubmit=(event)=>{
        event.preventDefault()  

    let existingPerson = persons.some(person=>person.name===newName)
    if(existingPerson){
        window.alert(`${newName} is already added to phonebook`)
            setNewName('')
            return;
    }
        
        const personObject={
            name:newName,
            number:newNumber
        }
        
         personService
         .create(personObject)
         .then(returnedPerson=>{
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
         })
          

    
    }

    const handleNameChange=(event)=>{
      // console.log(event.target.value)
       setNewName(event.target.value)
    }

    const handleNumberChange=(event)=>{
       setNewNumber(event.target.value)
    }

    const handleTextChange=(event)=>{
        console.log(event.target.value)
       setNewText(event.target.value) 

    }

    return(
      <>
       <h1>Phonebook</h1>
       <Filter text={text}
               handleTextChange={handleTextChange}/>

        <h2>Add a new</h2>
        <PersonForm handleFormSubmit={handleFormSubmit}
                    newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}/>
       
       <h2>Numbers</h2>
       {persons?(
           <>
           <Persons
           persons={persons}
           text={text}/>
          </>
       ):(<>
       <h1>Loading...</h1>
       </>)}
       </>
    )
 }

 export default App