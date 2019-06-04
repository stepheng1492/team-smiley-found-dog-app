import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import LostPetsList from '../../components/LostPetsList.jsx';



const styles = theme => ({
  
})

function LostPets(props) {
  return (
    <div>
      <div>
          <LostPetsList />
      </div>
    </div>
  )
}

export default withStyles(styles)(LostPets)