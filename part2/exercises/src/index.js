import React from 'react';
import ReactDOM from 'react-dom';

const Course =(props)=>{
   return(
     <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts}/>
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
  //console.log(props)
  return (
    <>
     {props.parts.map(part=> <Part key={part.id} 
                             name={part.name}
                             exercises={part.exercises}/>)}
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
  const course = {
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
      }
    ]
  }

  return(
    <>
     <Course course ={course}/>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

