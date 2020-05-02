import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT } from '../actions';
import axios from 'axios';

export default function* setup() {
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        let result = yield call(sendGetRequest, action.endpoint);
        yield put(setDataActionCreator(ACTION_TYPE_UNIT, result));
    } catch (error) {
        console.log(error);
    }
}

function sendGetRequest(dataType) {
    let token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MTkxNjEsImV4cCI6MTU4ODQyMDA2MSwiaWF0IjoxNTg4NDE5MTYxfQ.WHJKSvcYetGsLferczkSLqWhYrO9KWm0O5_V5wVVbtc';
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
