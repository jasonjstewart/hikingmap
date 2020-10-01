import React from 'react'
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl"
import { useEffect, useState, useRef } from 'react';
import data from "../data/Timp.json"
import Google_Maps_pin from "../images/Google_Maps_pin.svg"

const DataPoints = () => {
  const [markers,setMarkers]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  var marker;
  var markerData=[]
  const [start,setStart]=useState(null);
  var end;

  useEffect(()=>{
    if (isLoading===true){
        var newData = data.data.trackData.flat();

        for (let index = 0; index < newData.length; index++) {
            if (index==0) {
                setStart(<span><Marker
                coordinates={[newData[index].lon,newData[index].lat]}
                anchor="bottom">
                <img src={Google_Maps_pin}/>
              </Marker>
              <Popup
                coordinates={[newData[index].lon,newData[index].lat]}
                anchor="bottom"
                offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}
              >
                <h1>Timp</h1>
                {/* <h2>Mileage: 14.3 miles</h2> */}
                {/* <h2>ELeveation Gain: 4473 ft</h2> */}
              </Popup></span>)
            }
            markerData.push(
                <Feature 
                    key={index+1}
                    coordinates={[newData[index].lon,newData[index].lat]}
                />
            )
            
        }
        console.log(markerData)
        console.log(start)
        // marker = newData.map((d) => (
        //     <Feature
        //         coordinates={[d.lon, d.lat]}
        //         properties={{elevation: d.ele}}
        //     />
        // ));
        setMarkers(markerData);
        setIsLoading(false);
    }
  },[markers]);



  return (
    <span>
        {start}
        <Layer type="circle" id="marker" paint={{
            'circle-color': "#0088ff",
            'circle-stroke-width': 1,
            'circle-stroke-color': '#0088ff',
            'circle-stroke-opacity': 1
        }}>
            {markers}
        </Layer>
    </span>)
  
}



const Features = () => {

}

export default DataPoints;