import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/core/Checkbox';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';
var moment = require('moment');


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



function useForceUpdate() {
  const [value, set] = useState(true);
  return () => set(!value);
}


export default function TitlebarGridList(props) {
  
  const forceUpdate = useForceUpdate();

  const allLostPets = props.allPets.filter((pet) => {
    return pet.found === false;
  })

  const foundPets = (petId) => {
    return axios.put('/user', {
        petId,
    })
    .then((results) => console.log(results))
  }

    console.log(props);
  const classes = useStyles();
 if (!props.state.searched) {
  return (      
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Currently Missing Pets</ListSubheader>
        </GridListTile>
        {allLostPets.map(lostPet => (
          <GridListTile key={lostPet.image}>
            <img src={lostPet.image} alt={lostPet.name} />
            <GridListTileBar
              title={lostPet.name}
              subtitle={<span>{lostPet.type}</span>}
              subtitle={<span>Posted {moment(lostPet.createdAt).fromNow()}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${lostPet.title}`} className={classes.icon}>
                  <CheckBox onClick={() => {foundPets(lostPet.id); forceUpdate;}}/>  
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
else {
    let filteredPets = allLostPets.filter( (pet) => {
        if (pet.name) {
            return pet.name.toLowerCase() === props.state.searchParam.toLowerCase() ||
            pet.type.toLowerCase() === props.state.searchParam.toLowerCase();
        }
    });
    return (      
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Currently Missing Pets</ListSubheader>
            </GridListTile>
            {filteredPets.map(lostPet => (
              <GridListTile key={lostPet.image}>
                <img src={lostPet.image} alt={lostPet.name} />
                <GridListTileBar
                  title={lostPet.name}
                  subtitle={<span>Missing for X Days</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${lostPet.title}`} className={classes.icon}>
                      <CheckBox onClick={() => {foundPets(lostPet.id)}}/>  
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
}
}

