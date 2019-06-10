import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter, Link } from 'react-router-dom'
import Pets from '../../components/Pets.jsx'
import brightness_6 from '@material-ui/icons'


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
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

function Dash(props) {
    console.log(props)
    const { classes } = props
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <i className="material-icons" onClick={props.whichTheme}>
                    brightness_6
            </i>
                <Typography component="h1" variant="h5">
                    Paws And Found
                </Typography>

                <Typography component="h1" variant="h6">
                    Lost Pet?
                </Typography>
                <Pets />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    // add link to dash
                    component={Link}
                    to="/lostpets"
                    className={classes.submit}>
                    PET COMMENTS
                </Button>
            </Paper>

        </main>

    )

}

export default withRouter(withStyles(styles)(Dash))