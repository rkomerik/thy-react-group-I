import { ACTION_SET_DATA, ACTION_LOAD_DATA, ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY, ACTION_SET_LOADING } from '../actions';

const initialData = {
    units: [],
    categories: []
};

export default (state = initialData, action) => {
    console.log(action);
    
    if (action.type === ACTION_LOAD_DATA) {
        switch (action.actionType) {
            case ACTION_TYPE_UNIT:
                break;
            case ACTION_TYPE_CATEGORY:
                break;
            default:
                return state;
        }
    }

    if (action.type === ACTION_SET_DATA) {
        switch (action.actionType) {
            case ACTION_TYPE_UNIT:
                return { units: action.payload };
            case ACTION_TYPE_CATEGORY:
                return { categories: action.payload };
            default:
                return state;
        }
    }

    if (action.type === ACTION_SET_LOADING) {
        switch (action.actionType) {
            case ACTION_TYPE_UNIT:
                return { units: state.units, loading: action.payload };
            case ACTION_TYPE_CATEGORY:
                return { categories: state.categories, loading: action.payload };
            default:
                return state;
        }
    }

    return state;
};
