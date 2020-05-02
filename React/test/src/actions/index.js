// ACTION
export const ACTION_LOAD_DATA = 'LOAD_DATA';
export const ACTION_SET_DATA = 'SET_DATA';
export const ACTION_SET_LOADING = 'SET_LOADING';

// ACTION TYPE
export const ACTION_TYPE_UNIT = 'UNIT';
export const ACTION_TYPE_CATEGORY = 'CATEGORY';

// ACTION CREATOR
export const loadDataActionCreator = (actionType, endpoint) => {
    return {
        type: ACTION_LOAD_DATA,
        actionType: actionType,
        endpoint: endpoint
    };
};

export const setDataActionCreator = (actionType, data) => {
    return {
        type: ACTION_SET_DATA,
        actionType: actionType,
        payload: data
    };
};

export const setLoadingActionCreator = (actionType, status) => {
    return {
        type: ACTION_SET_LOADING,
        actionType: actionType,
        payload: status
    };
};
