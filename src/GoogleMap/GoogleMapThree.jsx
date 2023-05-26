import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const GoogleMapThree = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    );
  })
);

export default GoogleMapThree;
