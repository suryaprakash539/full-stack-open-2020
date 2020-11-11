import React,{useState} from 'react'

const App =()=>{
    const [persons,setPersons] = useState([
         {name:'Arto Hellas'}
    ])

    const [newName,setNewName] = useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault()
         
         for(let i=0;i<persons.length;i++){
             if(persons[i].name===newName){
                 window.alert(`${newName} is already added to phonebook`)
                 setNewName('')
                 return;
             }
         }
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