import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Button =({handleClick,text})=>{
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const App = ({anecdotes})=>{
  const [selected,setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))


  const handleClick = ()=>{
    setSelected(Math.floor(Math.random()*anecdotes.length)) 
  }

  const handleVote = ()=>{
     const newVotes=[...votes]
     newVotes[selected]++
     setVotes(newVotes)
  }
 
  return(
    <React.Fragment>
      <h3>{anecdotes[selected]}</h3>
      <h4>has {votes[selected]} votes</h4>
      <Button handleClick={handleVote}
              text='vote'/> 
      <Button handleClick={handleClick} 
              text='next anecdote'/>
             
    </React.Fragment>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);


