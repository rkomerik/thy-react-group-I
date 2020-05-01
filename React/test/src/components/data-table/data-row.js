import React from 'react';

const DataRow = (props) => {
    if (!props.columns || !props.data) {
        return (
            <tr>
                <td>No Data...</td>
            </tr>
        );
    }

    return (
        <tr>
            {props.columns.map((element, index) => {
                return <td key={index}>{`${props.data[element.source]}`}</td>;
            })}
        </tr>
    );
};

export default DataRow;
