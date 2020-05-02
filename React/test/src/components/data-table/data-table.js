import React from 'react';
import RowGenerator from './row-generator';

const DataTable = (props) => (
    <div>
        <table className='ui celled table'>
            <RowGenerator params={props.columns} type='header' />
            <RowGenerator params={{ columns: props.columns, data: props.data }} type='data' />
        </table>
    </div>
);

export default DataTable;
