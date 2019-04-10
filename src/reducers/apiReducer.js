import {EVENTS_RECEIVED} from "../actions/apiActions";

const INITIAL_STATE = {
  events: [],
};

export default function apiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case EVENTS_RECEIVED:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
}
