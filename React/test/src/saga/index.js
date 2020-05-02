import { takeEvery, call, put } from 'redux-saga/effects'
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT } from '../actions';
import axios from 'axios'

export default function* setup() {
    console.log("Saga middleware is running.");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        console.log("SAGA:loadData");
        console.log(action);
        let result = yield call(sendGetRequest);
        yield put(setDataActionCreator(ACTION_TYPE_UNIT,result));
    } catch (e) {
        console.log(e);
    }
}

const sendGetRequest = () => {
    console.log("Data is loading.....");
    return axios.get("http://178.128.248.160:81/api/unit", {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MTk0ODAsImV4cCI6MTU4ODQyMDM4MCwiaWF0IjoxNTg4NDE5NDgwfQ.o8bJT6hbdzsytVn4P4wjKSlGq6h9XOI_tM25P8tcKCQ`
        }
    })
        .then(res => res.data.data)
        .catch(e => e);
}