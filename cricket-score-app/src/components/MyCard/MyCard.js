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

const MyCard = () => {
  const getMatchCard = () => {
    return (
      <Card>
        <CardContent>
          <Grid container justify="center" spacing={6} alignItems="center">
            <Grid item>
              <Typography variant="h5">First Team</Typography>
            </Grid>

            <Grid item>
              <img src={VersusImage} className="versus-image" />
            </Grid>

            <Grid item>
              <Typography variant="h5">Second Team</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button variant="contained" color="secondary">
              Hello
            </Button>
            <Button variant="contained" color="secondary">
              {new Date().toString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    )
  }

  return <div>{getMatchCard()}</div>
}

export default MyCard
