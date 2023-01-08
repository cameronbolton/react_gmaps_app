import React from 'react';
import { useState, useCallback, useEffect } from 'react';

import ScriptTag from 'react-script-tag';

function MapWidget(){


      // const [map, setMap] = useState(null)
      // const gUrl = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GMAP_API_KEY + '&callback=initMap&v=weekly';

      // const initMap = useCallback(function callback() {
      function initMap() {
        console.log("in initMap")

        let map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 7,
          //center: { lat: 30.4978559, lng: -97.7657881 }
          center: { lng: 263, lat: 30 }
          // center: { lat: -28, lng: 137 }
        });
        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
        map.data.loadGeoJson(
          //"https://resume.daniellejwarden.com/data/Breweries.geojson"
          //"https://storage.googleapis.com/mapsdevsite/json/google.json"
          "Breweries.geojson"
        );

        // setMap(map)
      // }, [])
        }

      // const initMap() {};
      window.initMap = initMap;

      useEffect (() => {
        console.log('in useEffect');
        //console.log(process.env.REACT_APP_GMAP_API_KEY);
      }, [])
      // useEffect (() => {
      //   loadMap();
      // }, [loadMap])

      // const onUnmount = React.useCallback(function callback(map) {
      //   setMap(null)
      // }, [])
    
      return (
        <div>
          <ScriptTag isHydrating={true} type="text/javascript"
            src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GMAP_API_KEY + "&callback=initMap&v=weekly"}
          />
          Breweries:
          <div id="map" style={{width: 800, height: 600}}></div>
        </div>
      )
      
}

export default MapWidget;