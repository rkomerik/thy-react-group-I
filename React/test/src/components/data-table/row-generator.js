import React, { Component } from 'react';
import DataRow from './data-row';
import HeaderRow from './header-row';

class RowGenerator extends Component {
    render() {
        let result;
        switch (this.props.type) {
            case 'data':
                result = (
                    <tbody>
                        <DataRow {...this.props.params} />
                    </tbody>
                );
                break;
            case 'header':
                result = (
                    <thead>
                        <HeaderRow {...this.props.params} />
                    </thead>
                );
                break;
            default:
                result = <span></span>;
                break;
        }
        return result;
    }
}

export default RowGenerator;
