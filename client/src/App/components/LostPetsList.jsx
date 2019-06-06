import React from 'react';
import axios from 'axios';
import LostPetsListItem from './LostPetsListItem.jsx';

const subheadStyle = {
    fontStyle: 'calibri',
    textAlign: 'center',
    fontWeight: 'bold',
}

const titleStyle = {
    fontStyle: 'calibri',
    textAlign: 'center',
    fontWeight: 'bold',
}


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
            <h1 className='petListItem' style={titleStyle}>Pets</h1>
            <h3 className='petListItem' style={subheadStyle}>click on a pet to add or view comments</h3>
                {this.state.pets.map(pet => {
                    return <LostPetsListItem pet={pet} />
                })}
        </div>);
    }
}

export default LostPetsList;