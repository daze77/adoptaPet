import React from 'react'
import "./style.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function LeafletMap() {

  // var mymap = L.map('mapid').setView([43.6532, -79.3832], 13);

  // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   maxZoom: 18,
  //   id: 'mapbox/streets-v11',
  //   tileSize: 512,
  //   zoomOffset: -1,
  //   accessToken: 'pk.eyJ1IjoiY2F0aGVyaW5lYnNoYXciLCJhIjoiY2tuNHAxdW4wMWppaTJ3bzhvMXFhNDJidyJ9.HEowBjbSZjJeumgIFdN0Sw'
  // }).addTo(mymap);

  // var popup = L.popup()
  //   .setLatLng([51.5, -0.09])
  //   .setContent("I am a standalone popup.")
  //   .openOn(mymap);

 return(

 <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id='mapid'>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
    </Marker>
  </MapContainer>

)

 


}



export default LeafletMap;