import React from 'react';

const HeaderRow = (props) => {
    return (
        <tr>
            {Object.keys(props).map((value, index) => (
                <th key={index.toString()}> {props[value].displayName}</th>
            ))}
        </tr>
    );
};

export default HeaderRow;