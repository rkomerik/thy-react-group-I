import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'

export default class List extends React.Component {

    render() {
        let data = [
            {
                "name": "Santimetre",
                "shortForm": "[cm]",
                "materials": null,
                "id": "9094b257-5451-4cf8-940d-9e1780093013",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2019-10-23T09:53:39.923614Z Etc/UTC",
                "updatedAt": null,
                "deletedAt": null
            },
            {
                "name": "Top",
                "shortForm": "[top]",
                "materials": null,
                "id": "cd555632-c7dd-4299-bb5b-1381e2d13fad",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2019-10-23T09:53:49.616478Z Etc/UTC",
                "updatedAt": "2019-10-23T09:53:56.22024Z Etc/UTC",
                "deletedAt": null
            },
            {
                "name": "Deste",
                "shortForm": "[d]",
                "materials": null,
                "id": "143e86a5-3284-44ba-86a7-da55f558f463",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2019-10-23T09:54:08.23499Z Etc/UTC",
                "updatedAt": null,
                "deletedAt": null
            },
            {
                "name": "Kilogram",
                "shortForm": "[kg]",
                "materials": null,
                "id": "c76baa0a-2078-4a0e-9ae5-9c1f28fdb922",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2019-10-23T09:54:18.899245Z Etc/UTC",
                "updatedAt": "2019-10-23T09:54:27.063285Z Etc/UTC",
                "deletedAt": null
            },
            {
                "name": "Metre",
                "shortForm": "[m]",
                "materials": null,
                "id": "7488252e-6957-4663-a189-9a5b2d9b03b7",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2019-10-23T09:54:38.083757Z Etc/UTC",
                "updatedAt": null,
                "deletedAt": null
            }];
        return (
            <div className="ui container">
                <DataTable headerText={['Name', 'ShortForm', 'Materials','id','Active','Deleted','Created At','Updated At','Deleted At']}
                 data={data} />
            </div>
        )
    }
}