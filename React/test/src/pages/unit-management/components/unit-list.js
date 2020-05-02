import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDataActionCreator, ACTION_TYPE_UNIT, ACTION_SET_DATA, ACTION_SET_LOADING, setLoadingActionCreator } from '../../../actions';

class UnitList extends Component {
    componentDidMount() {
        this.loadData();
    }

    setLoading = (status) => {
        this.props.dispatch(setLoadingActionCreator(ACTION_TYPE_UNIT, status));
    };

    loadData = (event) => {
        this.setLoading(true);
        let token =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MTM5MjksImV4cCI6MTU4ODQxNDgyOSwiaWF0IjoxNTg4NDEzOTI5fQ.zZM1JL4VrqnkqwgnmTSJxecR1HWrvTZiP_I7DEXp4Cc';
        axios
            .get('http://178.128.248.160:81/api/unit', {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                this.props.dispatch(setDataActionCreator(ACTION_TYPE_UNIT, res.data.data));
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => this.setLoading(false));
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

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ACTION_SET_DATA,
    ACTION_SET_LOADING
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
