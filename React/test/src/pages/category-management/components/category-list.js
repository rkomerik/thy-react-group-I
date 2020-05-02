import React, { Component } from 'react';
import DataTableWithLoading from '../../../components/data-table/data-table-with-loading';
import { connect } from 'react-redux';
import { loadDataActionCreator, ACTION_LOAD_DATA, ACTION_TYPE_CATEGORY } from '../../../actions';

class CategoryList extends Component {
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

        return <DataTableWithLoading endpoint='category' columns={this.columnStructure()} effectActionType={ACTION_TYPE_CATEGORY} dataTitle='categories' />;
    }
}
export default CategoryList;
