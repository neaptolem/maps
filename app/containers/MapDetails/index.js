import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SVGMap from '../../components/SVGMap';
import MapDescription from '../../components/MapDescription';
import MapsStore from '../Maps/stores';

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
