import React, {Component} from "react";
import L from "leaflet";
import PropTypes from "prop-types";

export default class Map extends Component {

  componentDidMount() {

    const coordinates = this.props.coordinates;

    const city = [52.38333, 4.9];
    const zoom = 13;

    this.icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = L.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
    });
    this.map.setView(city, zoom);

    L.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.map);

    coordinates.map((coordinate) => {
      this.offerCords = coordinate;
      L.marker(this.offerCords, this.icon).addTo(this.map);
    });
  }
  render() {
    return <div id="map" style={{height: `100%`, width: `100%`}}></div>;
  }
}


Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
};
