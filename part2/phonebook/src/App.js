import React,{useState,useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

import personService from './services/persons'
import "./index.css"

const App =()=>{
    const [persons,setPersons] = useState([])

    const [newNumber,setNewNumber] = useState('')
    const [newName,setNewName] = useState('')
    const [text,setNewText] = useState('')
    const [notification,setNotification]=useState('...some error happened')

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
      let confirm= window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

       if(confirm){
        let updatePerson = persons.find(person=>person.name==newName) 
        let changedPerson = {...updatePerson,number:newNumber}

         personService
            .update(changedPerson,updatePerson.id)
            .then((returnedPerson)=>{
               setPersons(persons.map(person=>person.id!==updatePerson.id?person:returnedPerson))
               setNewNumber('')
               setNotification(`${changedPerson.name} number has been updated`)
               setTimeout(()=>{
                   setNotification(null)
               },3000)
            })
       }

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
              setNotification(`${returnedPerson.name} is added`)
              setTimeout(()=>{
                  setNotification(null)
              },3000)
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

    const handleDelete=(id,name)=>{
        const confirmDelete = window.confirm(`Delete ${name}?`)
        if(confirmDelete){
       personService
         .destroy(id)
         .then((returnedPerson)=>{
            console.log(returnedPerson)
            setPersons(persons.filter(person=>person.id!==id))
            setNotification(`${name} has been deleted`)
            setTimeout(()=>{
              setNotification(null)
            },5000)
         })
         .catch(err=>{
             console.log(err)
         })
        }
    }

    return(
      <>
       <h1>Phonebook</h1>
       <Notification message={notification}/>
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
           text={text}
           handleDelete={handleDelete}/>
          </>
       ):(<>
       <h1>Loading...</h1>
       </>)}
       </>
    )
 }

 export default App