import React,{useState} from 'react'
import Persons from './components/Persons'

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
       setNewText(event.target.value) 

    }

    return(
      <>
       <h1>Phonebook</h1>
       <p>filter shown with</p>
       <input
              value={text} 
              onChange={handleTextChange}/>

       <form onSubmit={handleFormSubmit}>
           <h2>add a new</h2>
           <div>
          Name: <input 
                 value={newName}
                 onChange={handleNameChange}/>
           </div>
           <div>
          Number:<input
                 value={newNumber}
                 onChange={handleNumberChange}/>
          </div> 
           <div>
               <button type='submit'>save</button>
           </div>
       </form>
       <h2>Numbers</h2>
       <Persons
             persons={persons}
             text={text}/>
      </>
    )
 }

 export default App