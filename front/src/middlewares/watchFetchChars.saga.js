import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

//worker function
export function* workerFetchChars() {
  try {
    const resp = yield call(axios.get, "http://localhost:3001/char");
    yield put({ type: "CHAR_LIST_SUCCESS", payload: { chars: resp.data } });
  } catch (error) {
    yield put({
      type: "CHAR_LIST_ERROR",
      payload: { error },
    });
  }
}


//watcher function
export function* watchFetchChars() {
  yield takeLatest("CHAR_LIST_START", workerFetchChars);
}
