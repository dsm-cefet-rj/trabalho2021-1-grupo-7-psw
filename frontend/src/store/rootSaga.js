import {fork} from 'redux-saga/effects';
import {
  watchEvent
} from './watchers'

export default function* rootSaga() {
  yield fork(watchEvent);
}
