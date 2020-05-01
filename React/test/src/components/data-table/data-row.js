import React from 'react';

const DataRow = (props) => {
    return (
        <tr>
            {props.columns.map((element, index) => {
                return <td key={index}>{`${props.data[element.source]}`}</td>;
            })}
        </tr>
    );
};

export default DataRow;
