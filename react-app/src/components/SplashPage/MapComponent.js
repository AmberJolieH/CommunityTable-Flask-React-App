/** @jsx jsx */
import { jsx } from "@emotion/react";

const MapComponent = () => {
  function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 16,
    });

    return <div>test</div>;
  }
};
export default MapComponent;
