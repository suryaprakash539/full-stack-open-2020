import React from 'react'
import Header from './Header'
import Content from './Content'

const Course =(props)=>{
    //console.log(props)
     return( 
       <>
       {props.courses.map(course=> <Header key={Math.random()} name={course.name}/>)}  
       {props.courses.map(course=> <Content parts={course.parts}/>)} 
       </>
     )
  }

export default Course