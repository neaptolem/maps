import React, { Component } from 'react';
import { Link } from 'react-router';

class Maps extends Component {
    render(){
        // Get data from route props
        const maps = this.props.route.data;
        // Map through maps and return linked maps
        const mapNode = maps.map((map) => {
            return (
                <Link
                    to={`/maps/${map.id}`}
                    className="list-group-item"
                    key={map.id}>
                    {map.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Maps page</h1>
                <div className="list-group">
                    {mapNode}
                </div>
            </div>
        );
    }
}

export default Maps
