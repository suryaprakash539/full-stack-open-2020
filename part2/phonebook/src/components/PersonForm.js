import React from 'react'

const PersonForm=(props)=>{
   // console.log(props)
    return(
        <>
          <form onSubmit={props.handleFormSubmit}>
           <div>
          Name: <input 
                 value={props.newName}
                 onChange={props.handleNameChange}/>
           </div>
           <div>
          Number:<input
                 value={props.newNumber}
                 onChange={props.handleNumberChange}/>
          </div> 
           <div>
               <button type='submit'>save</button>
           </div>
       </form>
        </>
    )
}

export default PersonForm