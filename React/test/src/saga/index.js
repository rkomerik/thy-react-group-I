import { takeEvery, call, put } from 'redux-saga/effects'
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY } from '../actions';
import axios from 'axios'

export default function* setup() {
    console.log("Saga middleware is running.");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        console.log("SAGA:loadData");
        console.log(action);
        let result = yield call(sendGetRequest,action.actionType);
        switch (action.actionType) {
            case "UNIT":
                yield put(setDataActionCreator(ACTION_TYPE_UNIT, result));
            case "CATEGORY":
                yield put(setDataActionCreator(ACTION_TYPE_CATEGORY, result));
        }

    } catch (e) {
        console.log(e);
    }
}

const sendGetRequest = (actionType) => {
    console.log("Data is loading.....");

    switch (actionType) {
        case "UNIT":
            return axios.get("http://178.128.248.160:81/api/unit", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MjA3NTEsImV4cCI6MTU4ODQyMTY1MSwiaWF0IjoxNTg4NDIwNzUxfQ.0GhAswWKw0-qlswyK942Ln9XG-qD3RV3j6Tq0KIK0So`
                }
            })
                .then(res => res.data.data)
                .catch(e => e);
        case "CATEGORY":
            case "UNIT":
                return axios.get("http://178.128.248.160:81/api/category", {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MjA3NTEsImV4cCI6MTU4ODQyMTY1MSwiaWF0IjoxNTg4NDIwNzUxfQ.0GhAswWKw0-qlswyK942Ln9XG-qD3RV3j6Tq0KIK0So`
                    }
                })
                    .then(res => res.data.data)
                    .catch(e => e);    }

}