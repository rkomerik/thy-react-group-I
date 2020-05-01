import React, { Component } from 'react';
export class HeaderItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = this.props.name;
        let activeName = this.props.params.activeName;
        let callbackOnClick = this.props.params.callbackOnClick;

        return (
            <a
                className={`item ${activeName === this.props.name ? 'active' : ''}`}
                onClick={() => {
                    if (typeof callbackOnClick !== 'function') {
                        return;
                    }
                    return callbackOnClick(this.props.name);
                }}>
                {name}
            </a>
        );
    }
}
export default HeaderItem;
