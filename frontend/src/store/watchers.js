import {takeLatest} from 'redux-saga/effects';
import {FETCH_EVENTS} from './event/types';
import {loadEvents} from './event/sagas';

export function* watchEvent() {
  yield  takeLatest(FETCH_EVENTS, loadEvents);
}