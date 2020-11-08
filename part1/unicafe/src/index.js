import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handleClick,text})=>{
  return(
    <React.Fragment>
       <button onClick={handleClick}>{text}</button>  
    </React.Fragment>
  )
}

const StatisticLine =({value,text})=>{
  return(
    <>
     <p>{text} {value}</p>
    </>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  if(good===0 && neutral===0 && bad===0){
    return(
      <>
      <h2>Statistics</h2>
       <h3>No feedback given</h3>
      </>
    )
  }
  return(
    <>
      <h2>Statistics</h2>
      <StatisticLine value={good} text='good'/>
      <StatisticLine value={neutral} text='neutral'/>
      <StatisticLine value={bad} text='bad'/>
      <StatisticLine value={good + neutral + bad} text='all'/>
      <StatisticLine value={((good * 1)+(neutral *0 )+(bad * -1))/3} text='average'/>
      <StatisticLine value={((good)/(good+neutral+bad))*100} text='positive'/>
    </>
  )
  
}

const App = ()=>{
    
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const setToGood = ()=>{
     setGood(good+1)
  }

  const setToNeutral = ()=>{
    setNeutral(neutral+1)
  }

  const setToBad = ()=>{
    setBad(bad+1)
  }
  
  
  return(
    <React.Fragment>
       <h1>Give feedback</h1>
       <Button handleClick={setToGood} text="good"/>
       <Button handleClick={setToNeutral} text='neutral'/>
       <Button handleClick={setToBad} text='bad'/>
       <Statistics good={good}
                   neutral={neutral}
                   bad={bad}/>
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   document.getElementById('root')
);

