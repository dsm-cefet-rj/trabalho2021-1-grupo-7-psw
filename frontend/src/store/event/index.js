import * as type from './types';

const initialState = {
  data:[],
  status: null
}

export default function EventReducer(state = initialState, action) {
  const {response = []} = action;
  switch(action.type) {
    case type.FETCH_EVENTS:
      return {
        ...state,
        status: 'loading'
      }
      case type.FETCH_EVENTS_RESULT:
      return {
        ...state,
        data: response.events,
        status: 'sucess'
      }
      default:
        return state;
  }
}