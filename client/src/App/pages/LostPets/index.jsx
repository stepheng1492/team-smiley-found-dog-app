import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Comments from '../../components/Comments.jsx'

const styles = theme => ({
  
})

function LostPets(props) {
  const { classes } = props
  console.log(classes.message);
  return (
    <div>
      <div>
          <Comments></Comments>
      </div>
    </div>
  )
}

export default withStyles(styles)(LostPets)