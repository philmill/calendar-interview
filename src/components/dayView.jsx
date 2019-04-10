import React from "react";
import moment from "moment";

import { dayViewWrapper, eventItem, eventItemTitle } from './dayView.module.css';

export default function DayView({ event }) {
  return (
    <div className={dayViewWrapper}>
      <div className={eventItem}><span className={eventItemTitle}>Title:</span>{event.title}</div>
      <div className={eventItem}><span className={eventItemTitle}>Description:</span>{event.description}</div>
      <div className={eventItem}><span className={eventItemTitle}>Start Date:</span>{moment(event.startDate).format('MMMM Do YYYY, h:mm a')}</div>
      <div className={eventItem}><span className={eventItemTitle}>End Date:</span>{moment(event.endDate).format('MMMM Do YYYY, h:mm a')}</div>
    </div>
  );
}
