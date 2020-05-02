import React, { Component } from 'react';
import DataRow from './data-row';
import HeaderRow from './header-row';

class RowGenerator extends Component {
    render() {
        if (!this.props.type) {
            throw new Error('type is undefined');
        }

        let result;
        switch (this.props.type) {
            case 'data':
                let dataParams = this.props.params;

                if (dataParams.data && dataParams.columns) {
                    result = dataParams.data.map((item, index) => {
                        return <DataRow key={index} columns={dataParams.columns} data={item} />;
                    });
                } else {
                    result = <DataRow />;
                }

                result = <tbody>{result}</tbody>;

                break;
            case 'header':
                result = (
                    <thead>
                        <HeaderRow {...this.props.params} />
                    </thead>
                );
                break;
            default:
                throw new Error('type is undefined');
        }
        return result;
    }
}

export default RowGenerator;
