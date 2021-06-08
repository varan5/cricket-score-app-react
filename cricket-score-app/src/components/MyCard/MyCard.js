import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import VersusImage from '../../assets/images/versus-image.jpg'
import './MyCardStyles.css'
import { getMatchDetails } from '../../api/Api'

const MyCard = ({ match }) => {
  const handleShowDetailsButton = (id) => {
    getMatchDetails(id)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })
  }

  const getMatchCard = () => {
    return (
      <Card style={{ margin: 30 }}>
        <CardContent>
          <Grid container justify="center" spacing={6} alignItems="center">
            <Grid item>
              <Typography variant="h5">{match['team-1']}</Typography>
            </Grid>

            <Grid item>
              <img src={VersusImage} className="versus-image" />
            </Grid>

            <Grid item>
              <Typography variant="h5">{match['team-2']}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
              onClick={() => {
                handleShowDetailsButton(match.unique_id)
              }}
              variant="contained"
              color="secondary"
            >
              Show Details
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              variant="contained"
              color="secondary"
            >
              Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    )
  }

  return <div>{getMatchCard()}</div>
}

export default MyCard
