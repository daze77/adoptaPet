import GoogleMapReact from 'google-map-react';
import {Component} from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    static defaultProps = {
    
        center: {
            lat: 43.65,
            lng: -79.38
        },
        zoom: 8
    
    };

    // render(){
        // return(
        //     <div style={{ height: '100vh', width: '100%'}}>
        //         <GoogleMapReact
        //         bootstrapURLKeys={{key:""}}
        //         defaultCenter={this.props.center}
        //         defaultZoom={this.props.zoom}
        //         >
        //             <AnyReactComponent
        //             lat={43.6532}
        //             lng={-79.3832}
        //             />
        //         </GoogleMapReact>
        //     </div>
        // );
    // }


}
export default SimpleMap