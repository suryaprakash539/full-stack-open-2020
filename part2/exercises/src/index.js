import React from 'react';
import ReactDOM from 'react-dom';

const Course =(props)=>{
  console.log(props)
   return( 
     <>
     {props.courses.map(course=> <Header name={course.name}/>)}  
     {props.courses.map(course=> <Content parts={course.parts}/>)} 
     </>
   )
}

const Header = (props)=>{
  return (
    <>
     <h1>{props.name}</h1>
    </>
  )
}

const Content = (props)=>{
 // console.log(props)
  return (
    <>
     {props.parts.map(part=> <Part key={part.id} 
                             name={part.name}
                             exercises={part.exercises}/>)}  
       <Total parts={props.parts}/>                                          
    </>
  )
}

const Total =(props)=>{
  let totalExercises = props.parts.reduce((sum,part)=>sum + part.exercises,0)
  return(
    <>
    <h3>Total exercises {totalExercises}</h3>
    </>
  )
}

const Part =(props)=>{
 // console.log(props)
  return(
   <>
    <h3>{props.name} {props.exercises}</h3>
   </>
  )
}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <>
     <Course courses ={courses}/>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

