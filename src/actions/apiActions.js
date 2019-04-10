export const EVENTS_RECEIVED = "CALENDAR/API/EVENTS_RECEIVED";

export function eventsReceived(events) {
  return { type: EVENTS_RECEIVED, payload: events};
}
