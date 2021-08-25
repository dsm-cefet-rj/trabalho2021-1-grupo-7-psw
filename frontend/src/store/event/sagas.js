import * as type from './types';
import {call, put} from 'redux-saga/effects';
import {getEvents} from '../../services/event_service';


export function* loadEvents() {
  try {
    const response = yield call(getEvents);
    yield put({
      type: type.FETCH_EVENTS_RESULT,
      response,
    });
   }catch(error) {
      yield put({
        type: type.FETCH_EVENTS_RESULT,
        error,
      })
    }
}