import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        Content of map:{this.props.params.mapId}
      </div>
    )
  }
});
