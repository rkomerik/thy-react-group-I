import React, { Component } from 'react';
import DataTable from '../../../components/data-table/data-table';
import { connect } from 'react-redux';
import { loadDataActionCreator, ACTION_LOAD_DATA, ACTION_TYPE_UNIT } from '../../../actions';
import DataTableWithLoading from '../../../components/data-table/data-table-with-loading';

class UnitList extends Component {

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
        return <DataTableWithLoading endpoint="unit" columns={this.columnStructure()} effectActionType={ACTION_TYPE_UNIT} dataTitle="units" />;
    }
}

// const mapStateToProps = (state) => {
//     return {
//         units: state.units,
//         loading: state.loading
//     };
// };

// // const mapDispatchToProps = (dispatch) => ({
// //     dispatch,
// //     ACTION_SET_DATA,
// //     ACTION_SET_LOADING
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
// export default connect(mapStateToProps)(UnitList);

export default UnitList;
