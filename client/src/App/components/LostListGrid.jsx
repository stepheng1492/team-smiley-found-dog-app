import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Axios from 'axios';

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



const tileData = [
    {
        name: 'Arya',
        species: 'dog',
        phone: '504-410-6484',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiEmXkR-iEHQ31Ukh7bj7AFAjz4a7MgC4wjfKZuE1tRnpw6nY3w'
    },
    {
        name: 'bobo',
        species: 'space monkey',
        phone: '504-444-555-3399',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtiMb3rd7wUDnOOzcrjKMO_QOrkKkKA-3jRRYHqekGhcwbVTz'
    },
    {
        name: 'Gavin',
        species: 'hedgehog',
        phone: '504-555-9999',
        img: 'https://i1.wp.com/www.campus.sg/wp-content/uploads/2015/09/2C72699700000578-3239311-image-a-5_1442543487887-2.jpg?fit=634%2C630&ssl=1'
    },
    {
        name: 'Sam',
        species: 'Kiwi',
        phone: '504-555-9999',
        img: 'data:image/jpeg;base64,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'
    },
    {
        name: 'jimmy john',
        species: 'sandwich',
        phone: '504-555-9999'
    },
    {
        name: 'jimmy john',
        species: 'sandwich',
        phone: '504-555-9999'
    },
    {
        name: 'jimmy john',
        species: 'sandwich',
        phone: '504-555-9999'
    },
];

// let tileData = Axios.get('/user').then(pets => {

// });


export default function TitlebarGridList(props) {
  const classes = useStyles();
    console.log(props.allPets);

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
              subtitle={<span>the {lostPet.type}</span>}
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

