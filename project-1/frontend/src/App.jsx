import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [jokes, setJokes] = useState([])

  useEffect(() => {})

  return (
    <div>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      })}


    </div>
  )
}

export default App