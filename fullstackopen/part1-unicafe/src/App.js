import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StaticsLine = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)

const Statics = ({good, neutral, bad, total}) => {
  if(total === 0) return (
    <p>
      No Data!
    </p>
  )

  return(
    <table>
      <tbody>
        <StaticsLine text="Good:" value={good}/>
        <StaticsLine text="Neutral:" value={neutral}/>
        <StaticsLine text="Bad:" value={bad}/>
        <StaticsLine text="Average:" value={(good-bad)/total}/>
        <StaticsLine text="Percent:" value={good/total * 100}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood( good +1 )
    setTotal( total + 1 )
  }
  const handleNeutralClick = () => {
    setNeutral( neutral +1 )
    setTotal( total + 1 )
  }
  const handleBadClick = () => {
    setBad( bad + 1 )
    setTotal( total + 1 )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text={'Good'}/>
      <Button onClick={handleNeutralClick} text={'Neutral'}/>
      <Button onClick={handleBadClick} text={'Bad'}/>
      <h1>Statics</h1>
      <Statics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App