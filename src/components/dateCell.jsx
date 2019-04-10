import React from "react";
import classNames from "classnames";
import moment from "moment";

import { gridCellComponent, thisMonthCell, dateBubble, todayBubble } from "../styles/dateCell.module.css";

export default function DateCell({ date, month, events }) {
  const isThisMonth = month === date.month();

  const isToday = date.isSame(moment(), "day");

  const classes = classNames(gridCellComponent, { [thisMonthCell]: isThisMonth });

  const dateBubbleClasses = classNames(dateBubble, { [thisMonthCell]: isThisMonth, [todayBubble]: isToday });

  return (
    <div className={classes}>
      <div>
        <div className={dateBubbleClasses}>{date.date()}</div>
        {events && events.map(event => (
          <div key={event.id}>{event.title}</div>
        ))}
      </div>
    </div>
  );
}
