export const TOGGLE_PANEL = "CALENDAR/UI/TOGGLE_PANEL";
export const SET_SELECTED_EVENT_ID = 'CALENDAR/UI/SET_SELECTED_EVENT_ID';

export function togglePanel() {
  return { type: TOGGLE_PANEL };
}

export function setSelectedEventId(eventId) {
  return function (dispatch, getState) {
    const { panelOpen } = getState().ui;
    if (!panelOpen) {
      dispatch(togglePanel());
    }
    dispatch({ type: SET_SELECTED_EVENT_ID, payload: {eventId} });
  }
}
