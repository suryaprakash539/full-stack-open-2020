import React,{useState,useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import axios from 'axios'

const App =()=>{
    const [persons,setPersons] = useState([])

    const [newNumber,setNewNumber] = useState('')
    const [newName,setNewName] = useState('')
    const [text,setNewText] = useState('')

    useEffect(()=>{
        console.log('effect')
        axios
           .get('http://localhost:3001/persons')
           .then(response=>{
            setPersons(response.data)
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
        
        axios
         .post('http://localhost:3001/persons',personObject)
         .then(response=>{
              setPersons(persons.concat(response.data))
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
       <Persons
             persons={persons}
             text={text}/>
      </>
    )
 }

 export default App