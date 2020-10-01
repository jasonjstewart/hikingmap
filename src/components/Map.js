import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../data/Timp.json"
import { render } from "@testing-library/react";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiamFzb25zMyIsImEiOiJja2ZrMGV5ZTUwcnVtMnlxZWx1NHY2dTVtIn0.o6gQH3IEvhXFo5GJyQ0PzQ",
});

export default Map;