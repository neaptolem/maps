import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

class SVGMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      svg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  _toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  componentWillMount() {
    const mapId = this.props.svgMap.id;
    this._toggleLoading();
    fetch(`/svg/f${mapId}.svg`)
      .then(res => res.text())
      .then(svg => {
        this.setState({ svg: svg });
        this._toggleLoading();
      });
  }

  handleClick(e) {
    const attributes = e.target.attributes;
    const fillColor = attributes.fill.nodeValue;
    const isRoom = fillColor === '#ffe680';
    if (isRoom) {
      const id = attributes.id.nodeValue;
      console.log(`Room id: ${id}`);
    }
  }

  render() {
    return this.state.loading ? (
      <section>Loading svg ...</section>
    ) : (
      <section onClick={this.handleClick} dangerouslySetInnerHTML={{__html: this.state.svg}}></section>
    );
  }
}

SVGMap.propTypes = {
  svgMap: PropTypes.object.isRequired
};

export default SVGMap;
