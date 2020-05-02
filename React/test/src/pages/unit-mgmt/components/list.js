import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { setDataActionCreator, ACTION_TYPE_UNIT } from '../../../actions'
import axios from 'axios'
class List extends React.Component {
    componentDidMount() {
        axios.get("http://178.128.248.160:81/api/unit", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MDg5ODMsImV4cCI6MTU4ODQwOTg4MywiaWF0IjoxNTg4NDA4OTgzfQ.9CBgQgrMRxi6IzKHMKEbgLwzbVYFRInSCL3KhKDI1yg`
            }
        })
            .then(res => {
                console.log(res);
                this.props.dispatch(setDataActionCreator(ACTION_TYPE_UNIT, res.data.data))
            })
            .catch(e => console.log(e));
    }
    render() {
        let r;
        if (this.props.units) {
            r = <DataTable headerText={['Name', 'ShortForm', 'Materials', 'id', 'Active', 'Deleted', 'Created At', 'Updated At', 'Deleted At']}
                data={this.props.units} />
        }
        else {
            r = <div>Loading..</div>
        }
        return (
            <div className="ui container">
                {r}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(List)