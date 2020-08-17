import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Feedback = (props) => {
  const {good, setGood, neutral, setNeutral, bad, setBad} = props;

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <h1>Give feedback</h1>

      <Button handleClick={handleGoodClick}
              text='Good'
      />

      <Button handleClick={handleNeutralClick}
              text='Neutral'
      />

      <Button handleClick={handleBadClick}
              text='Bad'
      />
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercent = good / total * 100;

  return (
    <>
      <h1>Statistics</h1>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {positivePercent} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback good={good}
                setGood={setGood}
                neutral={neutral}
                setNeutral={setNeutral}
                bad={bad}
                setBad={setBad}
      />

      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
      />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
