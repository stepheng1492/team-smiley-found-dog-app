import React from 'react';
import Axios from 'axios';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import PetsList from './PetsList.jsx';
import LostListModal from './LostListModal.jsx'
import FoundListModal from './FoundListModal.jsx'

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

// widget is stored in state, clicking button will call function to display widget
class Pets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ownerName: '',
            name: '',
            type: '',
            message: '',
            image: '',
            contact: '',
            pets: [],
            searched: false,
            searchParam: '',
            widget: window.cloudinary.createUploadWidget({
        cloud_name: `duubp6wjp`,
        uploadPreset: `wwcugh6n` },
        (err, result) => {this.checkUploadResult(result)}
      )
        }
        // binding of all the functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWidget = this.showWidget.bind(this);
        this.checkUploadResult = this.checkUploadResult.bind(this);
        this.getPets = this.getPets.bind(this);
        this.handleSearchBar = this.handleSearchBar.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        // this.getFoundPets = this.getFoundPets.bind(this);
        // this.foundPets = this.foundPets.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }
    // this.state.pets.filter
    // foundPets() {
    //   return axios.put('user', {
    //       found: true
    //   })
    //   .then((results) => console.log(results))
    // }

    // getFoundPets() {
    //   return axios.get('user', {
    //     params: {
    //       found: this.props.pets.found
    //     }
    //   }).then((results) => {
    //     let foundPets = [];
    //       results.data.forEach(pet => foundPets.push(pet));
    //       this.setState({
    //         foundPets: foundPets,
    //       })
    //   })
    // }

    componentDidMount() {
      this.getPets();
    }

    // grabs information from forms by name and value entered, sets state
    handleChange(e) {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    // create a function to pass down as a prop that will change the state of searched 
    // to true if searched and the search params 
    handleSearchBar(event) {
      this.setState({
        searchParam: event.target.value,
      });
    }

    handleSearchSubmit (event) {
      event.preventDefault();
      this.setState({
        searched: true,
        
      });
    }

    clearSearch(event) {
      event.preventDefault();
      this.setState({
        searched: false,
        searchParam: '',
      })
    }

    // Submits information in forms and picture to database
    handleSubmit(event) {
      const { ownerName, name, type, message, image, contact } = this.state;
      event.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          ownerName: ownerName,
          name: name,
          type: type,
          message: message,
          contact: contact,
          image: image,
        }).then(response => console.log(response))

        this.setState({
          ownerName: '',
          name: '',
          type: '',
          message: '',
          image: '',
          contact: '',
        })
      }
    
      // allows widget to be displayed
    showWidget(e) {
      this.state.widget.open()
    }

    // when image is loaded to cloudinary, grab url to save into database
    checkUploadResult(resultEvent) {
      if (resultEvent.event === 'success') {
        console.log(resultEvent);
        this.setState({
          image: resultEvent.info.secure_url
        })
      }
    }

    // gets all pets from database to show on page
    getPets() {
      Axios.get('/user')
        .then(pets => {
          let allPets = [];
          pets.data.forEach(pet => allPets.push(pet));
          this.setState({
            pets: allPets,
          })
        })
        .catch(err => console.error(err));
    }

    render() {
      const { classes } = this.props;
  
      const { pets, searched, searchParam } = this.state;
        return (
          <div>
            <Button
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              onClick={this.showWidget}
              className={classes.submit}
            >
              Upload Pet Pic
            </Button>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Owner Name</InputLabel>
                <Input
                required={true}
                  id="name"
                  type="text"
                  name="ownerName"
                  autoComplete="off"
                  autoFocus
                  onChange={this.handleChange}
                  value={this.state.ownerName}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Pet Name</InputLabel>
                <Input
                required={true}
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Input
                  required={true}
                  id="email"
                  type="text"
                  name="type"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.type}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="message">Message</InputLabel>
                <Input
                  required={true}
                  name="message"
                  type="text"
                  id="password"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="contact">Contact Info</InputLabel>
                <Input
                required={true}
                  name="contact"
                  type="text"
                  id="contact"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.contact}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                className={classes.submit}
              >
                Submit Pet!
              </Button>
              <PetsList pets={pets} />
            </form>
            <LostListModal
            clearSearch={this.clearSearch}
            state={this.state}
            allPets={pets}
            searched={searched}
            searchParam={searchParam}
            searchFunc={this.handleSearchBar}
            handleSearchSubmit={this.handleSearchSubmit}
            />
            <FoundListModal 
            clearSearch={this.clearSearch}
            state={this.state}
            allPets={pets}
            searched={searched}
            searchParam={searchParam}
            searchFunc={this.handleSearchBar}
            handleSearchSubmit={this.handleSearchSubmit}
            />
          </div>
        );
    }
}

export default withStyles(styles)(Pets);