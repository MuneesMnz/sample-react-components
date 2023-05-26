import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapFive = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

export default GoogleMapFive
