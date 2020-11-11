import React,{useState} from 'react'

const App =()=>{
    const [persons,setPersons] = useState([])

    const [newNumber,setNewNumber] = useState('')

    const [newName,setNewName] = useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault()
         

    const existingPerson = persons.some(person=>person.name===newName)
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

    return(
      <>
       <h1>Phonebook</h1>
       {/* {console.log(persons)} */}
       <form onSubmit={handleFormSubmit}>
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
       {persons.map(person=><h3 key={person.name}>{person.name} {person.number}</h3>)}
      </>
    )
 }

 export default App