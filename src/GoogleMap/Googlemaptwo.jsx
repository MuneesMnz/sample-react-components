import React, { useEffect } from "react";

const Googlemaptwo = (props) => {
  const { latitude, longitude } = props;

  const loc = [
    {
      lati: 10.974022,
      long: 76.223621,
    },
    {
      lati: 10.975555,
      long: 76.203808,
    },
    {
      lati: 10.944377,
      long: 76.227685,
    },
    {
      lati: 10.967972,
      long: 76.269186,
    },
  ];

  useEffect(() => {
    console.log(latitude, longitude, "lati");
    const IframeData = document.getElementById("Iframe");
   loc.forEach((value)=>{
    IframeData.src = `https://maps.google.com/maps?q=${value.lati},${value.long}&hl=es;&output=embed`;
   })
  }, []);
  return (
    <div>
      <h1 className="text-2xl">Google Map two</h1>

      <iframe id="Iframe" height="500px" width="100%"></iframe>
    </div>
  );
};

export default Googlemaptwo;
