import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const VoteCount = (props) => {
  return(
    <p>has {props.points[props.index]} votes</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(props.anecdotes.length + 1).join('0').split('').map(parseFloat))

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const nextAnecdote = () => {
    setSelected(getRandomInteger(0, props.anecdotes.length))
  }

  const vote = () => {
    const copy = [...points];

    copy[selected]++;

    setPoints(copy);
  }

  const getMostVotedAnecdote = () => {
    return props.anecdotes[points.indexOf(Math.max(...points))];
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{props.anecdotes[selected]}</p>

      <VoteCount index={selected}
                 points={points}
      />

      <Button text='vote'
              handleClick={vote}
      />

      <Button text='next anecdote'
              handleClick={nextAnecdote}
      />

      <h1>Anecdote with most votes</h1>

      <p>{getMostVotedAnecdote()}</p>

      <VoteCount index={points.indexOf(Math.max(...points))}
                 points={points}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'),
);
