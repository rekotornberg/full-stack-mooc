import { useState } from 'react'

const Statistics = (props) => {
    
    if (props.total === 0){
        return <p>No feedback given</p>
    }
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>Hyvä </th>
                    <th>Neutraali </th>
                    <th>Huono </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.good}</td>
                    <td>{props.neutral}</td>
                    <td>{props.bad}</td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th><StatisticLineTotal text="Yhteensä" value={props.total}/></th>
                </tr>
                <tr>
                    <th><StatisticLineAverage text="Average" value={props.average} /></th>
                </tr>
                <tr>
                    <th><StatisticLinePospPerc text="Positive" value={props.positivePercentage} /></th>
                </tr>
            </thead>
        </table>
 
      </div>
    )
  }

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const StatisticLineTotal = (props) => {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const StatisticLineAverage = (props) => {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const StatisticLinePospPerc = (props) => {
    return (
        <p>{props.text}: {props.value}%</p>
    )
}

  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const total = good + neutral + bad
    const average = (good - bad) / total
    const positivePercentage = (good / total) * 100
  
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button onClick={() => setGood(good + 1)} text="Hyvä"/>
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutraali" />
        <Button onClick={() => setBad(bad + 1)} text="Huono" />
        <h2>Statistics</h2>

        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
        />

      </div>
    )
  }
export default App
  