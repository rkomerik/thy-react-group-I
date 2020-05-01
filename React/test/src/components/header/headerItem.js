import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class HeaderItem extends Component {
    render() {
        let name = this.props.name;
        return (
            <NavLink
                activeClassName="active"
                exact
                className="item"
                // className={`item ${activeName === this.props.name ? 'active' : ''}`}
                to={this.props.url}
                // onClick={() => {
                //     if (typeof callbackOnClick !== 'function') {
                //         return;
                //     }
                //     return callbackOnClick(this.props.name);
                // }}
            >
                {name}
            </NavLink>
        );
    }
}
export default HeaderItem;
//   onClick={() => {
//     if (typeof callbackOnClick !== 'function') {
//         return;
//     }
//     return callbackOnClick(this.props.name);
// }}