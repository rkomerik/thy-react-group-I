import React, { Component } from 'react';
import RowGenerator from './row-generator';

class DataTable extends Component {
    constructor(props) {
        super(props);
    }

    dataRows = () => {
        return this.props.data.map((element, index) => {
            return <RowGenerator key={index} params={{ columns: this.props.columns, data: element }} type='data' />;
        });
    };

    render() {
        return (
            <div>
                <table className='ui celled table'>
                    <RowGenerator params={this.props.columns} type='header' />

                    {this.dataRows()}
                </table>
            </div>
        );
    }
}

export default DataTable;
