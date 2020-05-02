import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY, setLoadingActionCreator } from '../actions';
import axios from 'axios';

export default function* setup() {
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        let result = yield call(sendGetRequest, action.endpoint);
        yield put(setLoadingActionCreator(action.effectActionType, true));
        yield put(setDataActionCreator(action.effectActionType, result));
        yield put(setLoadingActionCreator(action.effectActionType, false));
    } catch (error) {
        console.log(error);
    }
}

function sendGetRequest(dataType) {
    let token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MjA0NDksImV4cCI6MTU4ODQyMTM0OSwiaWF0IjoxNTg4NDIwNDQ5fQ.NMs5HUivU1IbJ39GgXuiRMjZb2AiHbA-mtgc9Qc8tnU';
    let url = `http://178.128.248.160:81/api/${dataType}`;

    return axios
        .get(url, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => res.data.data)
        .catch((e) => e);
}
