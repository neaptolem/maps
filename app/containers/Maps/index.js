import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { Link } from 'react-router';

import MapsStore from './stores';

class Maps extends Component {

  static getStores() {
    return [MapsStore];
  }

  static calculateState(prevState) {
    return {
      maps: MapsStore.getState()
    };
  }

  render() {
    const maps = this.state.maps;
    const mapNodes = maps.map((map) => {
      return (
        <Link to={`/maps/${map.id}`}
          className="list-group-item"
          key={map.id}
        >{map.name}</Link>
      );
    });

    return (
      <div>
        <h1>Maps page</h1>
        <div className="list-group">
          {mapNodes}
        </div>
      </div>
    );
  }
}

export default Container.create(Maps);
