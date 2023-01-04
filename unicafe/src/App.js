import React, { useState} from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  

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

      <p>Yhteensä ääniä: {total}</p>
    </div>
  )
}


export default App
