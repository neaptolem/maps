import React from 'react';

import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={"/maps"}>Maps</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
});
