import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs.js'
import DataPoints from './components/DataPoints.js'
import Map from './components/Map.js'
import MapContainer from './components/MapContainer.js'
import { Layer, Feature } from "react-mapbox-gl"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import HikingList from './components/HikingList.js'


function App() {
  return (
    <div className="App">
      <NavTabs></NavTabs>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
