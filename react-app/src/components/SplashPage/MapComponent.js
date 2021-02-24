/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapComponent = () => {
  return (
    <div className="map__container">
      <Map google={window.google} zoom={14} containerStyle={{position: 'relative', width: "50rem", height: "50rem", margin: "0.5rem"}}>
        {/* <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

                  <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "your api key here",
})(MapComponent);
