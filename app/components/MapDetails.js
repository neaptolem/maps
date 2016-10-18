import React, { Component } from 'react';

import SVGMap from './SVGMap';
import MapDescription from './MapDescription';


export default class MapDetails extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    const maps = this.props.route.data;
    const id = this.props.params.id;
    const map = maps.filter(map => {
      if (map.id == id) {
        return map;
      }
    })[0];

    return (
      <section>
        <MapDescription map={map} />
        <SVGMap svgMap={map} />
      </section>
    );
  }
}
