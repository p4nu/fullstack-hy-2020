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

const StatisticLine = ({text, value}) => {
  if (text === 'Positive') {
    return (
      <tr>
        <td>{text}</td>

        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>

      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercent = good / total * 100;

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>

        <p>No feedback given.</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticLine text='Good'
                         value={good}
          />

          <StatisticLine text='Neutral'
                         value={neutral}
          />

          <StatisticLine text='Bad'
                         value={bad}
          />

          <StatisticLine text='All'
                         value={total}
          />

          <StatisticLine text='Average'
                         value={average}
          />

          <StatisticLine text='Positive'
                         value={positivePercent}
          />
        </tbody>
      </table>
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
