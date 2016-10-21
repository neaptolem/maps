import React, { Component, PropTypes } from 'react';

class MapDescription extends Component {
  render() {

    const map = this.props.map;

    return (
      <dl>
        <dt>name:</dt>
        <dd>{map.name}</dd>
        <dt>id:</dt>
        <dd>{map.id}</dd>
        <dt>detail:</dt>
        <dd>{map.detail}</dd>
      </dl>
    );
  }
}

MapDescription.propTypes = {
  map: PropTypes.object.isRequired
};

export default MapDescription;
