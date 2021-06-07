export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${process.env.REACT_APP_CRICKET_API_KEY}`

  return fetch(url)
    .then((response) => {
      response.json()
      console.log(response)
    })
    .catch((err) => {
      console.log('Error ' + err)
    })
}
