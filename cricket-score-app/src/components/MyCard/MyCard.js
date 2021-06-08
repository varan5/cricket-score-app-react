import React, { Fragment, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core'
import VersusImage from '../../assets/images/versus-image.jpg'
import './MyCardStyles.css'
import { getMatchDetails } from '../../api/Api'

const MyCard = ({ match }) => {
  const [details, setDetails] = useState({})
  const [openDialogBox, setOpenDialogBox] = useState(false)

  const handleShowDetailsButton = (id) => {
    getMatchDetails(id)
      .then((data) => {
        console.log(data)
        setDetails(data)
        handleOpenDialogBox()
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })
  }

  const handleCloseDialogBox = () => {
    setOpenDialogBox(false)
  }

  const handleOpenDialogBox = () => {
    setOpenDialogBox(true)
  }

  const getDialogBox = () => {
    ;<Dialog open={openDialogBox} close={handleCloseDialogBox}>
      <DialogTitle id="alert-dialog-title">Match Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{details.stat}</Typography>
          <Typography>
            Match
            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              {details.matchStarted ? 'started' : 'Still not started'}
            </span>
          </Typography>

          <Typography>
            Score
            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              {details.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCloseDialogBox} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
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

  return (
    <>
      {getMatchCard()}
      {getDialogBox()}
    </>
  )
}

export default MyCard
