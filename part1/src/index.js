import React,{useState} from 'react';
import ReactDOM from 'react-dom';

// const Display = ({counter})=>{
//   return (
//     <React.Fragment>
//          <p>you have count {counter}</p>
//     </React.Fragment>
//   )
// }


const Button = ({handleClick,text})=>{
  return (
    <>
     <button onClick={handleClick}>{text}</button>
    </>
  )
}


const History = (props)=>{
  
  if(props.allClicks.length==0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <>
      <p>the button press history:{props.allClicks.join(' ')}</p>
    </>
  )
  
}

const App=(props)=>{

  
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setAllClicks]= useState([])

  const handleLeftClick=()=>{
    setAllClicks(allClicks.concat('L'))
     setLeft(left+1)
  }

  const handleRightClick = ()=>{
    setAllClicks(allClicks.concat('R'))
    setRight(right+1)
  }
  
  return(
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
     
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



