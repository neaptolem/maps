import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SVGMap from './SVGMap';
import MapDescription from './MapDescription';
import MapsStore from '../stores/MapsStore';


class MapDetails extends Component {
  
  static getStores() {
    return [MapsStore];
  }

  static calculateState(prevState) {
    return {
      maps: MapsStore.getState()
    };
  }

  render() {
    const mapId = this.props.params.id;
    const map = this.state.maps.filter(map => {
      if (map.id == mapId) {
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

export default Container.create(MapDetails);
