import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils';

class InputMapData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idRoom: '',
            roomNumber: '',
            roomType: ''
        };
        this.handleClick = this.handleClick.bind(this);
        // this.handleId = this.handleId.bind(this);
        // this.handleNumber = this.handleNumber.bind(this);
    }
    handleClick() {
        const handleData = this.props.handleData;
        handleData(this.state.idRoom, this.state.roomNumber, this.this.state.roomType);
    }
    render() {
        return (
            <section>
                <form>
                    <fieldset>
                        <legend>RoomData</legend>
                        <section>
                            <input placeholder="id"/>
                        </section>
                        <section>
                            <input placeholder="roomNumber"/>
                        </section>
                        <section>
                            <input placeholder="roomType"/>
                        </section>
                        <section>
                            <button>Save</button>
                        </section>
                    </fieldset>
                </form>
            </section>
        )
    }

}
export default InputMapData;
