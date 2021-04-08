import React from 'react'
import "./style.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LocationContainer = (props) => {

  return (
    <div className="map-container" id="mapinfo">
      <MapContainer
        center={[43.6532, -79.3832]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.shelters.map(shelter => (
          <Marker
            position={[ shelter.latitude , shelter.longitude ]}>
            <Popup>{shelter.name}</Popup>
          </Marker>))};
  </MapContainer>
    </div >
  );
}

export default LocationContainer