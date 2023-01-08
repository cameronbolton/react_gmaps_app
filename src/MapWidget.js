import React from 'react';
import { useState, useCallback, useEffect } from 'react';

import ScriptTag from 'react-script-tag';

function MapWidget(){

      // const initMap = useCallback(function callback() {
      function initMap() {
        console.log(`in initMap`)

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

      }

      window.initMap = initMap;

      useEffect (() => {
        console.log('in useEffect');
        //console.log(process.env.REACT_APP_GMAP_API_KEY);
      }, [])
    
      //TODO: importing the google api might be better done with
      //      https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
      //      alternatively, we could pull the ScriptTag back up into App.js
      return (
        <div>
          <ScriptTag type="text/javascript"
            src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GMAP_API_KEY + "&callback=initMap&v=weekly"}
          />
          Breweries:
          <div id="map" style={{width: 800, height: 600}}></div>
        </div>
      )
      
}

export default MapWidget;