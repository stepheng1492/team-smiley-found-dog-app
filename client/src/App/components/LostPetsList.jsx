import React from 'react';
import axios from 'axios';
import LostPetsListItem from './LostPetsListItem.jsx';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';





class LostPetsList extends React.Component {
    constructor() {
        super();
        this.state = {
            pets: [],
        };
        this.getPets = this.getPets.bind(this);
    }

    
    getPets() {
        return axios.get('/user')
    }

    componentDidMount() {
        this.getPets()
        .then(data => {
            this.setState({
                pets: data.data,
            })
        })
    }

    render() {

        return (<div>
            <Typography variant='h3' align='center'>Lost Pets</Typography>
            <List>
                {this.state.pets.map(pet => {
                    return <LostPetsListItem pet={pet} />
                })}
            </List>
        </div>);
    }
}

export default LostPetsList;