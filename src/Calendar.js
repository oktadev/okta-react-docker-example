import React, { Component } from 'react';
import moment from 'moment';
import {
  CalendarWrapper,
  CalendarContainer,
  PagingButton,
  Day,
  DayHeader
} from './CalendarComponents'

export class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    }
  }

  createDaysOfMonth(refDate) {
    const date = moment(refDate).endOf('month');
    const lastDate = date.date();
    const firstWeekday = date.startOf('month').day();

    const calendarDays = [];

    const today = moment();

    for (let w=0; w<firstWeekday; w++) {
      calendarDays.push(<Day key={Math.random()}/>); // empty days
    }

    for (let d=1; d<lastDate; d++) {
      calendarDays.push(<Day key={d} today={date.date(d).isSame(today, 'day')}>{d}</Day>);
    }

    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(<Day key={Math.random()}/>);
    }

    return calendarDays;
  }

  prevMonth() {
    this.setState({date: this.state.date.subtract(1, 'month')})
  }

  nextMonth() {
    this.setState({date: this.state.date.add(1, 'month')})
  }

  render() {
    return <CalendarWrapper>
      <h2>{this.state.date.format('MMMM YYYY')}</h2>
      <div>
        <PagingButton onClick={this.prevMonth.bind(this)}>&lt;</PagingButton>
        <PagingButton onClick={this.nextMonth.bind(this)}>&gt;</PagingButton>
      </div>
      <CalendarContainer>
        <DayHeader>Sunday</DayHeader>
        <DayHeader>Monday</DayHeader>
        <DayHeader>Tuesday</DayHeader>
        <DayHeader>Wednesday</DayHeader>
        <DayHeader>Thursday</DayHeader>
        <DayHeader>Friday</DayHeader>
        <DayHeader>Saturday</DayHeader>
        {this.createDaysOfMonth(this.state.date)}
      </CalendarContainer>
    </CalendarWrapper>;
  }
}
