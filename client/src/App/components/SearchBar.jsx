
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'center',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


function SearchForm(props) {
  const classes = useStyles();
    // console.log(props);
  return (
      <div>
    <form 
    className={classes.container} 
    noValidate 
    autoComplete="off"
    onSubmit={props.handleSearchSubmit}
    >
      <TextField
        id="standard-search"
        label="Search lost pets"
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={props.searchFunc}
        />
    </form>
    <Button 
        variant="contained" 
        size="small" 
        className={classes.button}
        onClick={props.clearSearch}
    >
        Clear Search
    </Button>
        </div>
  );
}

export default SearchForm;
