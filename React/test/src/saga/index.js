import { takeEvery, call, put, all, take } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, ACTION_SET_DATA, setDataActionCreator, setLoadingActionCreator } from '../actions';
import axios from 'axios';

export default function* setup() {
    yield takeEvery(ACTION_LOAD_DATA, loadData);
    yield takeEvery(ACTION_SET_DATA, disableLoading);
}

function* disableLoading(action) {
    yield put(setLoadingActionCreator(action.actionType, false));
}

function* loadData(action) {
    try {
        yield put(setLoadingActionCreator(action.effectActionType, true));
        let result = yield call(sendGetRequest, action.endpoint);
        yield put(setDataActionCreator(action.effectActionType, result));
    } catch (error) {
        console.log(error);
    }
}

function sendGetRequest(dataType) {
    let token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MjU5OTgsImV4cCI6MTU4ODQyNjg5OCwiaWF0IjoxNTg4NDI1OTk4fQ.dYrCH7AaedtUht-JRQozyRAzgSJ1D2dRAZUMoAdRJDk';
    let url = `http://178.128.248.160:81/api/${dataType}`;

    return axios
        .get(url, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            return res.data.data;
        })
        .catch((e) => {
            console.log(e);
            return undefined;
        });
}
