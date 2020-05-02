import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';
import { connect } from 'react-redux';
import { loadDataActionCreator, ACTION_LOAD_DATA, ACTION_TYPE_CATEGORY } from '../../../actions';

class CategoryList extends Component {
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_LOAD_DATA, 'category', ACTION_TYPE_CATEGORY));
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
                    <DataTable columns={this.columnStructure()} data={this.props.categories} />
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
        categories: state.categories,
        loading: state.loading
    };
};

export default connect(mapStateToProps)(CategoryList);
