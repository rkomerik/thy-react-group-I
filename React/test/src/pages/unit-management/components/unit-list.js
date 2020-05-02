import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';
import { connect } from 'react-redux';
import { ACTION_SET_LOADING, setLoadingActionCreator, loadDataActionCreator, ACTION_LOAD_DATA } from '../../../actions';

class UnitList extends Component {
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_LOAD_DATA, 'unit'));
    };

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
                    <DataTable columns={this.columnStructure()} data={this.props.units} />
                    <div className={loaderClassNames}>
                        <div className='ui loader' />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        units: state.units,
        loading: state.loading
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     dispatch,
//     ACTION_SET_DATA,
//     ACTION_SET_LOADING
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
export default connect(mapStateToProps)(UnitList);
