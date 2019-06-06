import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TitlebarGridList from './LostListGrid.jsx';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchBar from './SearchBar.jsx';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 700,
        height: 700,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.05),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

function LostPetModal(props) {
    const [open, setOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
        props.getPets();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    // console.log(props.state);
    return (
        <div>
            <Button
                color='secondary'
                variant="contained"
                fullWidth
                onClick={handleOpen}>Lost Pets List</Button>
            <Modal
                color="secondary"
                variant="outlined"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" id="modal-title" align="center">
                        Have You Seen Me?
                    </Typography>
                    <SearchBar
                    clearSearch={props.clearSearch}
                    state={props.state}
                    searchFunc={props.searchFunc}
                    handleSearchSubmit={props.handleSearchSubmit}
                    />
                    <Typography variant="subtitle1" id="simple-modal-description">

                    </Typography>
                    <TitlebarGridList 
                        allPets={props.allPets} 
                        state={props.state}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default LostPetModal;
