import React, {Component, createRef} from "react";
import L from "leaflet";
import PropTypes from "prop-types";

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.mapRef = createRef();
  }


  componentDidMount() {

    const coordinates = this.props.coordinates;

    const city = [52.38333, 4.9];
    const zoom = 13;

    this.icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = L.map(this.mapRef.current, {
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
    return <section className="cities__map map" ref={this.mapRef}/>;
  }
}


Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};
