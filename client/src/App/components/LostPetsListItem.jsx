import React from 'react';

class LostPetsListItem extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <li>    
            name: {this.props.pet.name}
            </li>);
    }
}

export default LostPetsListItem;