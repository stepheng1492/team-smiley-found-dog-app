import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
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


export default function TitlebarGridList(props) {
    console.log(props);
  const classes = useStyles();
 if (!props.state.searched) {
  return (      
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Currently Missing Pets</ListSubheader>
        </GridListTile>
        {props.allPets.map(lostPet => (
          <GridListTile key={lostPet.image}>
            <img src={lostPet.image} alt={lostPet.name} />
            <GridListTileBar
              title={lostPet.name}
              subtitle={<span>Posted {moment(lostPet.createdAt).fromNow()}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${lostPet.title}`} className={classes.icon}>
                  <InfoIcon />  
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
    let filteredPets = props.allPets.filter( (pet) => {
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
                      <InfoIcon />  
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

