import React from 'react'
import Header from './Header'
import Content from './Content'

const Course =(props)=>{
    //console.log(props)
     return( 
       <>
       {props.courses.map(course=> <Header key={course.id} name={course.name}/>)}  
       {props.courses.map(course=> <Content key={Math.random()} parts={course.parts}/>)} 
       </>
     )
  }

export default Course