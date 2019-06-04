import React from 'react'
import { Paper } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Comments from '../../components/Comments.jsx'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing(3),
  },
})

function LostPets(props) {
  const { classes } = props

  return (
    <div>
      <main className={classes.main}>
        <Paper className={classes.paper}>
        </Paper>
      </main>
      <div>
          <Comments></Comments>
      </div>
    </div>
  )
}

export default withStyles(styles)(LostPets)