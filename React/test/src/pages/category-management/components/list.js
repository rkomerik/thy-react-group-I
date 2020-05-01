import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';

class List extends Component {
    constructor(props) {
        super(props);
    }

    data = () => {
        return [
            {
                name: 'Suit',
                displayOrder: 1,
                iconFile: null,
                iconPath: 'suit.png',
                iconFileContentType: 'image/png',
                id: '4d13e7e1-c974-457b-99f7-39997a92f72a',
                isActive: true,
                isDeleted: false,
                createdAt: '2019-10-24T19:41:40.505Z Etc/UTC',
                updatedAt: '2020-02-10T20:45:31.396326Z Etc/UTC',
                deletedAt: null
            },
            {
                name: 'Jacket',
                displayOrder: 2,
                iconFile: null,
                iconPath: 'jacket.png',
                iconFileContentType: 'image/png',
                id: 'd71aa2f7-5b3b-4b08-bd5b-f3efc6cc2504',
                isActive: true,
                isDeleted: false,
                createdAt: '2019-10-24T19:41:40.505Z Etc/UTC',
                updatedAt: '2020-02-10T21:00:42.731023Z Etc/UTC',
                deletedAt: null
            }
        ];
    };

    columnStructure = () => {
        return [
            {
                source: 'name',
                displayName: 'Ad'
            },
            {
                source: 'iconPath',
                displayName: 'Görsel'
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
        return <DataTable columns={this.columnStructure()} data={this.data()} />;
    }
}

export default List;
