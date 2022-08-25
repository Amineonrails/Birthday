import { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'

const App = () => {
  const [friends, setFriends] = useState(data);

  
  return (
    <main>
      <section className='container'>
        <h3>{friends.length} birthdays today</h3>

        <List friends={friends} />

        <button onClick={() => setFriends([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
