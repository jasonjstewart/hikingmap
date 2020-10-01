import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25vw',
    height: '75vh',
    backgroundColor: theme.palette.background.paper,
    color: 'black'
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const HikingList = (props) => {
  const classes = useStyles();
  const { index, style } = props;

  return (
    <div className={classes.root}>
      <List style={{maxHeight: '100%', overflow: 'auto'}} >
        <ListItem button style={style} key={index}>
          <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
        <ListItem button style={style} key={index}>
        <ListItemText primary={`Timp`} />
          <ListItemText secondary={`Distance: 14.3 miles, Elev. Gain: 4473 feet`} />
        </ListItem>
      </List>
    </div>
  );
}

export default HikingList;