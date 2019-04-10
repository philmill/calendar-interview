import { TOGGLE_PANEL, SET_SELECTED_EVENT_ID } from "../actions/uiActions";

const INITIAL_STATE = {
  panelOpen: false,
  selectedEventId: null,
};

export default function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TOGGLE_PANEL:
      return {
        ...state,
        panelOpen: !state.panelOpen,
      };

    case SET_SELECTED_EVENT_ID:
      return {
        ...state,
        selectedEventId: action.payload.eventId
      };

    default:
      return state;
  }
}
