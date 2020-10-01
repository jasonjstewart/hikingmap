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

// const newdata = data.trackdata.map((datapoint)=>{
//   return <Feature
//     coordinates={[datapoint.lon, datapoint.lat]}
//     properties={{elevation: datapoint.elevation}}
//     />
// });

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiamFzb25zMyIsImEiOiJja2ZrMGV5ZTUwcnVtMnlxZWx1NHY2dTVtIn0.o6gQH3IEvhXFo5GJyQ0PzQ",
  
});

// const MapboxGLMap = () => {
//   const [map, setMap] = useState(null);
//   const [location,setLocation]=useState(null);
//   const mapContainer = useRef(null); 

//   const [markers,setMarkers] = useState(null);
//   // var newData = data.data.trackData.flat();

//   // newData = newData.map(d => (
//   //     <Feature
//   //       coordinates={[d.lon, d.lat]}
//   //       properties={{elevation: d.ele}}
//   //     />
//   // ));

//   // setMarkers(newData);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb25zMyIsImEiOiJja2ZrMGV5ZTUwcnVtMnlxZWx1NHY2dTVtIn0.o6gQH3IEvhXFo5GJyQ0PzQ'; //TODO: Move to env file later
//     const initializeMap = ({ setMap, mapContainer }) => {
//       const map = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/outdoors-v11", // stylesheet location
//         center: [-111.640486,40.259368],
//         zoom: 10
//       });

//       map.on("load", () => {
//         setMap(map);
//         map.resize();
//       });
//     };

//     // var newData = data.data.trackData.flat();

//     // newData = newData.map(d => (
//     //     <Feature
//     //       coordinates={[d.lon, d.lat]}
//     //       properties={{elevation: d.ele}}
//     //     />
//     // ));

//     // markers =newData;
//     // console.log(markers)

//     if (!map) initializeMap({ setMap, mapContainer });
//   }, [map]);

//   return <div ref={el => (mapContainer.current = el)} style={styles} >
//       {/* <Layer>
//         {markers}
//       </Layer> */}
//     </div>;
// };

export default Map;