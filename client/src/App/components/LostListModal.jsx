import React from 'react';
import Axios from 'axios';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import ReactModal from 'react-modal';

class LostListModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <Button
          onClick={this.handleOpenModal}
          fullWidth
          variant="outlined"
          color="secondary"
          >Current Lost Pets</Button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <Button 
            color="secondary"
            variant="outlined"
            onClick={this.handleCloseModal}>Close Modal</Button>
          </ReactModal>
        </div>
      );
    }
  }
  
  const props = {};

  export default LostListModal;
