import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: ''

        };

        this.state = this.initialState;
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const { name } = this.state;

        return (
            <form className="form">

                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter Item" />
                <input
                    type="button"
                    value="Add Item"
                    onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;