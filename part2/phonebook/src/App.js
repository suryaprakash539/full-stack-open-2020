import React,{useState} from 'react'

const App =()=>{
    const [persons,setPersons] = useState([
         {name:'Arto Hellas'}
    ])

    const [newName,setNewName] = useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        const personObject={
            name:newName
        }
       setPersons(persons.concat(personObject)) 
       setNewName('')
    }

    const handleNameChange=(event)=>{
      // console.log(event.target.value)
       setNewName(event.target.value)
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
               <button type='submit'>save</button>
           </div>
       </form>
       <h2>Numbers</h2>
       {persons.map(person=><h3 key={person.name}>{person.name}</h3>)}
      </>
    )
 }

 export default App