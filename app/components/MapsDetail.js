import React from 'react';

import ReactDOM from 'react-dom';
var Isvg = require('react-inlinesvg');


export default React.createClass({
  componentDidMount: function() {
  //  console.log(ReactDOM.findDOMNode('Isvg'));
  //  console.log(document.getElementsByTagName('svg'));
  var doc=loadXMLDoc("/../svg/f1.svg")
},
    render() {
        const maps = this.props.route.data;
        const id = this.props.params.id;
        const map = maps.filter(map => {
            if (map.id == id) {
                return map;
            }
        });
        return (
            <div>
                <div className="row">
                    <ul>
                        <li>name: {map[0].name}</li>
                        <li>id: {map[0].id}</li>
                        <li>detail:{map[0].detail}</li>
                    </ul>
                    <div ref="mySVG">
                      <Isvg src={`/../svg/f${map[0].id}.svg`}></Isvg>
                    </div>
                </div>
            </div>
        )
    }
});
