import React, { useEffect, useState } from "react";
import Googlemaptwo from "./Googlemaptwo";

const Googlemapone = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // const geolocation = async () => {
    //   try {
    //     const position = await new Promise((res, rej) => {
    //       navigator.geolocation.getCurrentPosition(res, rej);
    //     });
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // geolocation();
    // console.log(latitude, longitude);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
        (error)=>{
            console.log(error.message);
        }
        )
    }
    else{
        console.log("Geolocation is not supported by this browser.")
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Google Map One</h1>
      <p>My Location</p>
      {latitude && <p>Latitude : {latitude}</p>}
      {longitude && <p>Longitude : {longitude}</p>}

      {latitude && longitude && (
        <Googlemaptwo latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
};

export default Googlemapone;
