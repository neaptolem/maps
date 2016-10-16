import React from 'react';

export default React.createClass({
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
                        <li>{map[0].paths[0]}</li>
                    </ul>
                    <object type="image/svg+xml" data={`/../svg/f${map[0].id}.svg`}>
                    </object>
                </div>
            </div>
        )
    }
});
