import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { loadDataActionCreator, ACTION_TYPE_CATEGORY } from '../../../actions'
class List extends React.Component {
    hanleLoadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_TYPE_CATEGORY));
    }
    render() {

        return (
            <div className="ui container">
                <button className="ui labeled icon button" onClick={this.hanleLoadData}><i className="refresh icon"></i>Refresh</button>
                <DataTable headerText={['Name', 'displayOrder', 'iconFile', 'iconPath', 'iconFileContentType', 'id','isActive','isDeleted', 'Created At', 'Updated At', 'Deleted At']}
                data={this.props.Categories} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { Categories: state.categories };
}
export default connect(mapStateToProps)(List)
//export default connect(mapStateToProps,{ACTION_SET_DATA})(List)