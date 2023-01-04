import React, { useState} from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100
  

  return  (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => setGood(good + 1)}>Hyvä</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutraali</button>
      <button onClick={() => setBad(bad + 1)}>Huono</button>
      <h2>Tilastot</h2>
      <p>Hyvä: {good}</p>
      <p>Neutraali: {neutral}</p>
      <p>Huono: {bad} </p>

      <p>Yhteensää: {total}</p>
      <p>Average: {average}</p>
      <p>Positive {positivePercentage}%</p>
    </div>
  )
}


export default App
