import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { setDataActionCreator, ACTION_TYPE_UNIT } from '../../../actions'
import axios from 'axios'
class List extends React.Component {
    hanleLoadData = () => {
        axios.get("http://178.128.248.160:81/api/unit", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MTA2MTcsImV4cCI6MTU4ODQxMTUxNywiaWF0IjoxNTg4NDEwNjE3fQ.WjuDNghEuYvkESaRx-vdIwA8X0bxXxRyy39MmS31yy4`
            }
        })
            .then(res => {
                // console.log(res);
                this.props.dispatch(setDataActionCreator(ACTION_TYPE_UNIT, res.data.data))
                // this.props.dispatch(
                // {
                //     type: ACTION_SET_DATA,
                //     actionType: ACTION_TYPE_UNIT,
                //     payload:res.data.data
                // });
            })
            .catch(e => console.log(e));
    }
    render() {
        return (
            <div className="ui container">
                <button className="ui labeled icon button" onClick={this.hanleLoadData}><i className="refresh icon"></i>Refresh</button>
                <DataTable headerText={['Name', 'ShortForm', 'Materials', 'id', 'Active', 'Deleted', 'Created At', 'Updated At', 'Deleted At']}
                data={this.props.units} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { units: state.units };
}
export default connect(mapStateToProps)(List)
//export default connect(mapStateToProps,{ACTION_SET_DATA})(List)