import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TutorialTile from './TutorialTile';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    height: '100%',
    overflowY: 'auto',
  },
  raisedButton: {
    padding: '10px',
  }
};

const tilesData = [
  {
    img: 'beach.jpeg',
    title: 'Beach',
  },
  {
    img: 'zoo.jpeg',
    title: 'Zoo',
  },
  {
    img: 'bar.jpg',
    title: 'Bar',
  },
  {
    img: 'ballet.jpeg',
    title: 'Performances',
  },
  {
    img: 'beer.jpg',
    title: 'Craft Beer',
  },
  {
    img: 'children.jpeg',
    title: 'Child-friendly',
  },
  {
    img: 'city.jpeg',
    title: 'City',
  },
  {
    img: 'fastfood.jpeg',
    title: 'Street Food',
  },
  {
    img: 'forest.jpeg',
    title: 'Nature',
  },
  {
    img: 'gig.jpeg',
    title: 'Music events',
  },
  {
    img: 'mountain.jpeg',
    title: 'Mountains',
  },
  {
    img: 'finedining.jpeg',
    title: 'Fine dining',
  },
  {
    img: 'museum.jpeg',
    title: 'Museum',
  },
  {
    img: 'romantic.jpeg',
    title: 'Romantic',
  },
  {
    img: 'sports.jpeg',
    title: 'Sports',
  },
  {
    img: 'surfing.jpeg',
    title: 'Surfing',
  },
];


export default class Tutorial extends React.Component {
  constructor(props){
    super(props);
    this.interests = [];
  }

  render(){
    return(
      <div style={styles.root}>
      <p>Welcome to Wandrlove! Select items that you appreciate when you are traveling from pictures below, so we will make sure you will get the deals you like!</p>
      <MuiThemeProvider>
      <GridList
        cols={4}
        cellHeight={200}
        padding={1}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <TutorialTile title={tile.title} featured={tile.featured} img={tile.img} bgColor={'red'}/>
        ))}
      </GridList>
      <RaisedButton style={styles.raisedButton}>I'm happy with my choices, let's go</RaisedButton>
        </MuiThemeProvider>
      </div>
    )}
  }