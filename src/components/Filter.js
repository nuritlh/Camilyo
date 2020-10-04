import React, { Component } from 'react';
// import { any, PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: true };
    }

    handleChange = (e) => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }));
        this.props.handleChange(e.target.name);
    }

    render() {
        return (
            <div className="checkboxes">
                <Checkbox checked={this.state.isChecked} name="name" onChange={this.handleChange} />
                <label>Name</label>
                <Checkbox checked={!this.state.isChecked} name="age" onChange={this.handleChange} />
                <label>Age</label>
            </div>
        );
    }

}

export default Filter;