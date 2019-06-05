// import React from 'react';

// class SearchForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         searched: ''
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A pet was searched: ' + this.state.searched);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//           <div stle={{display: 'flex', justifyContnet: 'center'}}>
//               <div>

//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input placeholder="Search by name or type" type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//               </div>
//           </div>
//       );
//     }
//   }

//   export default SearchForm;
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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

function SearchForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
      console.log(event);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}

export default SearchForm;
