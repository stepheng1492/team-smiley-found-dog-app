import React from 'react';
import Comments from './Comments.jsx'

class LostPetsListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            commentRender: false,
        };
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleNameClick() {
        this.setState({
            commentRender: !this.state.commentRender,
        });
    }

    render() {
        return (
            <div>
            <li onClick={this.handleNameClick}>name: {this.props.pet.name}</li>
            {this.state.commentRender ? <Comments pet={this.props.pet}/> : null}
            </div>);
    }
}

export default LostPetsListItem;