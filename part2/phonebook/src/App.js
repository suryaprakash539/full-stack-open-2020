import React,{useState} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App =()=>{
    const [persons,setPersons] = useState([
            { name: 'Arto Hellas', number: '040-123456' },
            { name: 'Ada Lovelace', number: '39-44-5323523' },
            { name: 'Dan Abramov', number: '12-43-234345' },
            { name: 'Mary Poppendieck', number: '39-23-6423122' }
          ])

    const [newNumber,setNewNumber] = useState('')
    const [newName,setNewName] = useState('')
    const [text,setNewText] = useState('')

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
       setPersons(persons.concat(personObject)) 
       setNewName('')
       setNewNumber('')
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