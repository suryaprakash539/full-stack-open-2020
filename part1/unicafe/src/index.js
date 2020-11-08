import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handleClick,text})=>{
  return(
    <React.Fragment>
       <button onClick={handleClick}>{text}</button>  
    </React.Fragment>
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
       <h2>Statistics</h2>
       <p>good {good}</p>
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>
       <p>all {good + neutral + bad}</p>
       <p>average {((good * 1)+(neutral *0 )+(bad * -1))/3}</p>
       <p>positive {((good)/(good+neutral+bad))*100} %</p>
    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

