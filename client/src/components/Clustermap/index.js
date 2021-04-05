import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ClusterLayer from '../src/ClusterLayer';

const position = { lng: -79.3832, lat: 43.6532 }
const markers = [
  {
    position: {  lng: -79.35607, lat: 43.65776,},
    text: 'Toronto Humane Society',
  },
  {
    position: {  lng: -79.3996887207031, lat: 43.6630058288574},
    text: 'Annex Cat Rescue',
  },
];

class ExampleClusterComponent extends React.Component {

  render() {
    const style = {
      border: 'solid 3px lightblue',
      backgroundColor: '#008000',
      color: 'white',
      textAlign: 'center',
      margin: '0',
      padding: '0.25em 0.25em 0.5em',
      fontSize: '1.25em',
      fontWeight: '700'
    };
    const cluster = this.props.cluster;

    if (cluster.markers.length == 1) {
      const markerStyle = Object.assign({}, style, {
        minWidth: '110px',
        borderRadius: '16px',
        borderTopLeftRadius: '0',
      });

      return (
        <div style={markerStyle} >{cluster.markers[0].text}</div>
      );
    }

    const clusterStyle = Object.assign({}, style, {
      borderRadius: '50%',
      borderTopLeftRadius: '0',
      width: '24px',
      height: '24px'
    });

    return (
      <div style={clusterStyle}>{cluster.markers.length}</div>
    );
  }

}

const map = (
  <Map center={position} zoom={13}>
    <ClusterLayer
      markers={markers}
      clusterComponent={ExampleClusterComponent} />
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </Map>
);

render(map, document.getElementById('app'));
export default map