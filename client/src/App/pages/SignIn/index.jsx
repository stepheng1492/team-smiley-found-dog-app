import React from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import 'firebase/auth';
import { Link, withRouter } from 'react-router-dom'
import gmailLogin from '../../components/gmailLogin.jsx'

const styles = theme => ({
    main: {
        width: 'auto',
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
    form: {
        marginTop: theme.spacing(),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
});

function SignIn(props) {
    const { classes } = props

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Paws And Found Sign In
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="off" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="off" />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/dash"
                        className={classes.submit}>
                        Sign In!
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        to="/signup"
                        className={classes.submit}>
                        Sign Up!
                    </Button>
                    <Typography 
                    component="h1" 
                    variant="overline"
                    align="center"
                    gutterBottom={false}>
                       OR
                    </Typography>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/dash"
                        onClick={gmailLogin}
                        className={classes.submit}>
                        G-Mail
                    </Button>
                </form>
            </Paper>
        </main>
    )
}
//
export default withRouter(withStyles(styles)(SignIn))