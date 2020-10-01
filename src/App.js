import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs.js'
import DataPoints from './components/DataPoints.js'
import Map from './components/Map.js'
import { Layer, Feature } from "react-mapbox-gl"

function App() {
  return (
    <div className="App">
      <NavTabs></NavTabs>
      <header className="App-header">
      <Map
        style="mapbox://styles/mapbox/outdoors-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center= {[-111.640486,40.259368]}
      >
        <DataPoints></DataPoints>
      </Map>;
      </header>
    </div>
  );
}

export default App;
