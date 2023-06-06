import "./App.css";
import UsingForm from "./CustomDropdown/usingForm";
import Home from "./Dashboard/Home";
import Dropdown from "./Dropdown/Dropdown";
import DropdownForForm from "./Filter/DropdownForForm";
import FilterData from "./Filter/FilterData";
import FilterWithTable from "./Filter/FilterWithTable";
import GoogleMapFive from "./GoogleMap/GoogleMapFive";
import Googlemapfour from "./GoogleMap/Googlemapfour";
import IjasApi from "./Ijas/IjasApi";
// const Map = () => {
//   return (
//     <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.397, lng: -75.644 }} />
//   );
// }

// const WrapperMap = withScriptjs(withGoogleMap(Map));
const apikey = "AIzaSyBkxwKEkXu_I1-KX6fTRsn__mL-dFR9r5E";

function App() {
  return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       {/* <GoogleMapThree
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apikey}`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         isLoaded={true}
//       /> */}
//     <Googlemapfour
//   googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apikey}&v=3.exp&libraries=geometry,drawing,places`}
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />
//       <p>abc</p>
//     </div>
<div>

  {/* <Dropdown /> */}
  {/* <DropdownForForm  /> */}
  <Home />
  {/* <IjasApi /> */}
  
</div>
  );
}

export default App;
