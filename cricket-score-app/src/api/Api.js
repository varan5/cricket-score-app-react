import dotenv from 'dotenv'

dotenv.config()

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${process.env.REACT_APP_CRICKET_API_KEY}`

  return fetch(url)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .catch((err) => {
      console.log('Error ' + err)
    })
}

export const getMatchDetails = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${process.env.REACT_APP_CRICKET_API_KEY}&&unique_id=${id}`
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log('Error' + err)
    })
}
