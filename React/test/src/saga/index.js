import { takeEvery, call, put } from 'redux-saga/effects'
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY } from '../actions';
import axios from 'axios'

const BearerToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODg0MjA3NTEsImV4cCI6MTU4ODQyMTY1MSwiaWF0IjoxNTg4NDIwNzUxfQ.0GhAswWKw0-qlswyK942Ln9XG-qD3RV3j6Tq0KIK0So`;

export default function* setup() {
    console.log("Saga middleware is running.");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        console.log("SAGA:loadData");
        console.log(action);

        const {unit, category} = yield{ 
            unit :call(sendGetRequest),
            category : call(sedGetCategoryRequest)
        };

        yield put(setDataActionCreator(ACTION_TYPE_UNIT, unit));
        yield put(setDataActionCreator(ACTION_TYPE_CATEGORY, category))

    } catch (e) {
        console.log(e);
    }
}

const sendGetRequest = () => {
    console.log("Data is loading.....");
    return axios.get("http://178.128.248.160:81/api/unit", {
        headers: {
            Authorization: BearerToken
        }
    })
        .then(res => res.data.data)
        .catch(e => e);
}

const sedGetCategoryRequest = () =>{
    console.log("Data is loading.....");
    return axios.get("http://178.128.248.160:81/api/category", {
        headers: {
            Authorization: BearerToken
        }
    })
    .then(res => res.data.data)
        .catch(e => e);

}