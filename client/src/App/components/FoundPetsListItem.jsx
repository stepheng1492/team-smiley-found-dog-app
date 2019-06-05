import React from 'react'

class FoundPetListItem extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <li>
                name: { this.props.foundPet.name }
                </li>
            </div>
        )
    }
}

export default FoundPetListItem;