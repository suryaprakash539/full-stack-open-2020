import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=>{
  return(
    <React.Fragment>
       <h1>{props.course}</h1>
    </React.Fragment>
  )
}

const Part=(props)=>{
  return(
   <>
    <h2 >{props.part.name }  {props.part.exercises} </h2>
   </>
  )
}
const Content = (props)=>{
   return(
    <>
     {props.parts.map(function(prop,index){
       return <Part key={index} part={prop} />
     })}
    </>
  )
}

const Total=(props)=>{
  let totExe=0
  for(let i=0;i<props.parts.length;i++){
    totExe = totExe+ props.parts[i].exercises
  }
  return(
    <React.Fragment>
      <p>Total Number of exercises {totExe}</p>
      
    </React.Fragment>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name:'Fundamentals of React',
    exercises : 10
  },

  {
    name:'Using props to pass data',
    exercises: 7
  },
  
  {
    name:'State of a component',
    exercises : 14
  }]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


