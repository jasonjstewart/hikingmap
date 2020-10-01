import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Map from './Map.js'
import DataPoints from './DataPoints.js'
import { ZoomControl } from "react-mapbox-gl";

const MapContainer=() => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Map
        style="mapbox://styles/mapbox/outdoors-v9"
        containerStyle={{
          height: '75vh',
          width: '65vw'
        }}
        center= {[-111.640486,40.259368]}
        
      >
          <ZoomControl/>
        <DataPoints></DataPoints>
      </Map>
      </Container>
    </React.Fragment>
  );
}
export default MapContainer;