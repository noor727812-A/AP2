import { useState } from 'react'

// --- 1. مكونات تطبيق العداد (Counter) ---
const Display = ({ counter }) => <h1 style={{ fontSize: '2.5rem', color: '#61dafb' }}>{counter}</h1>
const Button = ({ onClick, text }) => (
  <button onClick={onClick} style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' }}>
    {text}
  </button>
)

// --- 2. مكونات تطبيق الإحصائيات (Unicafe) ---
const StatisticLine = ({ text, value }) => (
  <tr>
    <td style={{ padding: '5px 10px' }}>{text}</td>
    <td style={{ padding: '5px 10px', fontWeight: 'bold' }}>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) return <p>No feedback given</p>

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <table style={{ borderCollapse: 'collapse', marginTop: '10px' }}>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1) + " %"} />
      </tbody>
    </table>
  )
}

// --- المكون الرئيسي الذي يجمع كل الوظائف ---
const Week3 = () => {
  // States للعداد
  const [counter, setCounter] = useState(0)

  // States للتقييمات (Unicafe)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // بيانات وتصويت الحِكَم (Anecdotes)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  // بيانات قائمة المهام (Todo List)
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    setTodos(todos.concat({ id: Date.now(), text: newTodo }))
    setNewTodo('')
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>حل وظائف Week 3</h1>

      {/* الوظيفة 1: العداد */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2>1. تطبيق العداد (Components)</h2>
        <Display counter={counter} />
        <Button onClick={() => setCounter(counter + 1)} text="plus" />
        <Button onClick={() => setCounter(0)} text="zero" />
        <Button onClick={() => setCounter(counter - 1)} text="minus" />
      </section>

      {/* الوظيفة 2: Unicafe */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2>2. تطبيق التقييمات (Unicafe)</h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
        <h3>Statistics</h3>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>

      {/* الوظيفة 3: الحِكَم */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2>3. تطبيق الحِكَم (Anecdotes)</h2>
        <p>"{anecdotes[selected]}"</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
        <h3>Anecdote with most votes</h3>
        <p>"{anecdotes[mostVotesIndex]}"</p>
      </section>

      {/* الوظيفة 4: قائمة المهام */}
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2>4. تمرين التحدي (Todo List)</h2>
        <form onSubmit={addTodo}>
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter task..." />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </section>
    </div>
  )
}

export default Week3