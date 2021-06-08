import React, { Fragment, useEffect, useState } from 'react'
import './App.css'
import dotenv from 'dotenv'
import Navbar from './components/Navbar/Navbar'
import MyCard from './components/MyCard/MyCard'
import { getMatches } from './api/Api'
import { Grid } from '@material-ui/core'

dotenv.config()

const App = () => {
  const [matches, setMatches] = useState([
    { age: 2, age: 55, age: 59 },
    { age: 2, age: 55, age: 59 },
    { age: 54 },
  ])

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log('Data: ' + data)
        setMatches(data.matches)
        console.log(data.matches)
      })
      .catch((err) => console.log('Error: ' + err))
  }, [])

  return (
    <div className="app">
      <Navbar />

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <Fragment>
              {match.type == 'Twenty20' ? <MyCard match={match} /> : ''}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
