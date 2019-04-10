import React from "react";
import { number, object, array } from "prop-types";
import moment from "moment";

import chunkArray from "../helpers/chunkArray";
import DateCell from "./dateCell";

import { monthViewComponent, monthViewHeader, gridWrapper, headerItem, weekRow } from "../styles/monthView.module.css";

const DAYS_OF_WEEK = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

function filterEventsByYearAndMonth(year, month, events) {
  return events && events.filter(event => {
    const momentDate = moment(event.startDate);
    return (momentDate.year() === year && momentDate.month() === month);
  })
}

function eventsForDate(date, events) {
  return events && events.filter(event => moment(event.startDate).day() === date.day());
}

export default class MonthView extends React.Component {
  static propTypes = {
    momentizedDate: object.isRequired, // TODO: shape
    year: number.isRequired,
    month: number.isRequired,
    events: array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { eventsForMonth: [] };
  }

  componentDidUpdate(prevProps) {
    // check for month and year changes
    // in real world we'd update the API to fetch by month instead of all events
    if (
      prevProps.year !== this.props.year ||
      prevProps.month !== this.props.month ||
      prevProps.events.length !== this.props.events.length
    ) {
      this.setState({
        eventsForMonth: filterEventsByYearAndMonth(this.props.year, this.props.month, this.props.events)
      });
    }
  }

  render() {
    const dates = this.getDates();
    const weeks = chunkArray(dates, 7);

    return (
      <div className={monthViewComponent}>
        <div className={monthViewHeader}>{DAYS_OF_WEEK.map(this.renderHeaderItem)}</div>
        <div className={gridWrapper}>
          {weeks.map((days, i) => {
            return (
              <div key={`week-${i}`} className={weekRow}>
                {days.map(this.renderGridCell)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  renderHeaderItem = (day) => {
    return <span className={headerItem} key={day}>{day}</span>
  }

  renderGridCell = (date) => {
    const key = date.toString();
    // filter month events for this day
    const events = eventsForDate(date, this.state.eventsForMonth);
    return <DateCell key={key} date={date} month={this.props.month} events={events}/>;
  }

  getDates = () => {
    const { start, end } = this.getDateRange();
    let iterator = moment(start);
    const dates = [];

    while (iterator.isSameOrBefore(end)) {
      dates.push(moment(iterator))
      iterator.add(1, "day")
    }

    return dates;
  }

  getDateRange = () => {
    return {
      start: this.getDate().startOf("month").startOf("week"),
      end: this.getDate().endOf("month").endOf("week"),
    };
  };

  // return copy of given date so we don't mutate
  getDate = () => {
    return moment(this.props.momentizedDate);
  }
}
