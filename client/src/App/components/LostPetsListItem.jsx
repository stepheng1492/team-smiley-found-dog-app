import React from 'react';
import Comments from './Comments.jsx'

class LostPetsListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            commentRender: false,
        };
        this.handleNameClick = this.handleNameClick.bind(this);
        this.commentRenderFalse = this.commentRenderFalse.bind(this);
    }

    handleNameClick() {
        this.setState({
            commentRender: true,
        });

        Array.from(document.getElementsByClassName('petListItem')).forEach(element => {
            element.style.display = 'none';
        })
    }

    commentRenderFalse() {
        this.setState({
            commentRender: false,
        })
    }

    render() {
        return (
            <div>
            <li onClick={this.handleNameClick} className='petListItem'>{this.props.pet.name}</li>
            {this.state.commentRender ? <Comments commentRender={this.commentRenderFalse} pet={this.props.pet}/> : null}
            </div>);
    }
}

export default LostPetsListItem;