import React, { useEffect, useState } from 'react'
import './App.css'
import dotenv from 'dotenv'
import Button from '@material-ui/core/Button'
import Navbar from './components/Navbar/Navbar'
import MyCard from './components/MyCard/MyCard'
import { getMatches } from './api/Api'

dotenv.config()

const App = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
      .then((data) => setMatches(data.matches))
      .catch((err) => console.log('Error: ' + err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      {matches.map((match) => (
        <MyCard match={match} />
      ))}
    </div>
  )
}

export default App
