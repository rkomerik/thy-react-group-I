import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import axios from 'axios'
export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        axios.get("http://178.128.248.160:81/api/unit",{
            headers:{
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODgzMzk4NzEsImV4cCI6MTU4ODM0MDc3MSwiaWF0IjoxNTg4MzM5ODcxfQ.p3qEfTGQgzwtIyhweWNlFH_PAGac1gvMhTwsnpY1tIc`
            }
        })
            .then(res => this.setState({data:res.data.data}))
            .catch(e => console.log(e));
    }
    render() {
        return (
            <div className="ui container">
                <DataTable headerText={['Name', 'ShortForm', 'Materials', 'id', 'Active', 'Deleted', 'Created At', 'Updated At', 'Deleted At']}
                    data={this.state.data} />
            </div>
        )
    }
}