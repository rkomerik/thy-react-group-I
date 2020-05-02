import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { setDataActionCreator, ACTION_TYPE_UNIT, loadDataActionCreator } from '../../../actions'
import axios from 'axios'
class List extends React.Component {
    hanleLoadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_TYPE_UNIT));
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