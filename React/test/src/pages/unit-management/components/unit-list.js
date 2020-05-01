import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';
import axios from 'axios';

class UnitList extends Component {
    constructor(props) {
        super(props);

        this.state = { data: undefined };
    }

    componentDidMount() {
        let token =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODgzNDEzMzEsImV4cCI6MTU4ODM0MjIzMSwiaWF0IjoxNTg4MzQxMzMxfQ.dcnH2QLUkIFuPKh8hl76V-xWK50fnC1frHpOgc5zCrs';

        axios
            .get('http://178.128.248.160:81/api/unit', {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => this.setState({ data: res.data.data }))
            .catch((e) => {
                console.log(e);
                return this.setState({ data: undefined });
            });
    }

    columnStructure = () => {
        return [
            {
                source: 'name',
                displayName: 'Ad'
            },
            {
                source: 'shortForm',
                displayName: 'Kısaltma'
            },
            {
                source: 'isActive',
                displayName: 'Aktif?'
            },
            {
                source: 'isDeleted',
                displayName: 'Silinmiş?'
            }
        ];
    };

    render() {
        return <DataTable columns={this.columnStructure()} data={this.state.data} />;
    }
}

export default UnitList;
