import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputLabel, Input, Typography, Button, FormControl} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Comment from './Comment.jsx';
const styles = theme => ({
main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto"
    }
},
paper: {
    marginTop: theme.spacing(8),
    display: "100px",
    flexDirection: "column",
    alignItems: "left",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
},
avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
},
form: {
    marginTop: theme.spacing()
},
submit: {
    marginTop: theme.spacing(3)
}
});

const divStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
}

const commentTitleStyle = {
    fontWeight: 'bold',
}

//make handle change to bind comment input 
function Comments(props) {

    const [state, setState] = useState({comments: [], message: ''});

    const { message, comments } = state;
    // re-render once on every state change
    useEffect(() => {
        //axios get request to get messages from database
        axios.get('/comments').then((results) => {
            setState({comments: results.data});
        });
    }, []);
    const addComment = (comment) => {
        axios.post('/comments', {
            petId: props.pet.id,
            message: comment,
        })
        comments.push({message: comment, petId: props.pet.id})        
        setState({message: '', comments,});
        
    }
    const handleMessage = (e) => {
        setState({message: e.target.value, comments: comments});
    }
    

    const back = () => {
        // hide comment component
        props.commentRender();

        // show html collection
        Array.from(document.getElementsByClassName('petListItem')).forEach(element => {
            element.style.display = 'block';
        })
    }

    const { classes } = props;

    return (
    <div style={divStyle}>
        <div>
            {" "}
            <h3 style={commentTitleStyle}>
            Comments For {props.pet.name}
            </h3>
            {comments
            ? comments.map(comment => {
                if (comment.petId === props.pet.id) {
                    return <Comment comment={comment} />
                }
            })
            : ""}
        </div>
        <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="comment" width="100px">
                Add Comment Here
            </InputLabel>
            <Input
                disableUnderline={true}
                name="comment"
                type={message}
                width="100px"
                id="comment"
                autoComplete="off"
                onChange={handleMessage}
                value={message}
            />
            </FormControl>
        </form>
        <Button
            type="submit"
            width="100px"
            variant="contained"
            color="primary"
            onClick={() => addComment(message)}
        >
            Add Comment
        </Button>
        <Button
            type="submit"
            width="100px"
            variant="contained"
            color="secondary"
            onClick={back}
        >
            Back
        </Button>

    </div>
    );
}

export default withStyles(styles)(Comments);
