import React, { Component } from 'react';
import RowGenerator from './row-generator';

class DataTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table className='ui celled table'>
                    <RowGenerator params={this.props.columns} type='header' />
                    <RowGenerator params={{ columns: this.props.columns, data: this.props.data }} type='data' />
                </table>
            </div>
        );
    }
}

export default DataTable;
