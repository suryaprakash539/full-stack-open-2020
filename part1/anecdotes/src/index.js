import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Button =({handleClick,text})=>{
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Ancedote =(props)=>{
  //console.log(props)
  return(
    <>
    <h1>{props.title}</h1>
      <h3>{props.selectedAnecdote}</h3>
      <h4>has {props.noOfVotes} votes</h4>
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

   const calculateWinner=()=> votes.indexOf(Math.max(...votes))
  
 
  return(
    <React.Fragment>
      <Ancedote title='Anecdote of the day'
                selectedAnecdote={anecdotes[selected]}
                noOfVotes={votes[selected]}/>
      <Button handleClick={handleVote}
              text='vote'/> 
      <Button handleClick={handleClick} 
              text='next anecdote'/>
      <Ancedote title='Ancedote with most votes'
                selectedAnecdote={anecdotes[calculateWinner()]}
                noOfVotes={votes[calculateWinner()]}/>       
             
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


