import { call, all } from 'redux-saga/effects' 
import { watchFetchChars } from "./watchFetchChars.saga";

export function* rootSaga() {
    yield all([call(watchFetchChars)])
}