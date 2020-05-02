import React, { Component } from 'react';
import DataTable from './data-table';
import { connect } from 'react-redux';
import { loadDataActionCreator, ACTION_LOAD_DATA, ACTION_TYPE_UNIT } from '../../actions';

class DataTableWithLoading extends Component {
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_LOAD_DATA, this.props.endpoint, this.props.effectActionType));
    };

    render() {
        let buttonClassNames = 'ui labeled icon button';
        let loaderClassNames = 'ui dimmer';

        if (this.props.loading) {
            buttonClassNames += ' loading';
            loaderClassNames += ' active';
        }

        return (
            <div>
                <button className={buttonClassNames} onClick={this.loadData}>
                    <i className={`ui icon refresh`} />
                    Refresh
                </button>
                <div className='ui segment'>
                    <DataTable columns={this.props.columns} data={this.props.data} />
                    <div className={loaderClassNames}>
                        <div className='ui loader' />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state[ownProps.dataTitle],
        loading: state.loading
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     dispatch,
//     ACTION_SET_DATA,
//     ACTION_SET_LOADING
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
export default connect(mapStateToProps)(DataTableWithLoading);
