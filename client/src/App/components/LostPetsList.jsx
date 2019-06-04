import React from 'react';
import axios from 'axios';
import LostPetsListItem from './LostPetsListItem.jsx'

class LostPetsList extends React.Component {
    constructor() {
        super();
        this.state = {
            pets: [],
        };
        this.getPets = this.getPets.bind(this);
    }

    /**
     * getPets function makes request to server
     */

    
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
            <h1>Lost Pets</h1>
            {this.state.pets.map(pet => {
                return <LostPetsListItem pet={pet} />
            })}
        </div>);
    }
}

export default LostPetsList;