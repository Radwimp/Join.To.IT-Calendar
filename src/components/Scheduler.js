import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Event from "./Event";
import Slot from "./Slot";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Scheduler() {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(3, "hour").toDate(),
      title: "Event name",
      desc: "notes",
      color: "royalblue",
    },
  ]);

  const createEvent = (event) => {
    setEvents(events.concat(event));
  };

  const changeEvent = (index, event) => {
    if (!!event) {
      setEvents(
        [].concat(events.slice(0, index), event, events.slice(index + 1))
      );
    } else {
      setEvents([].concat(events.slice(0, index), events.slice(index + 1)));
    }
  };

  return (
    <Calendar
      popup
      defaultDate={moment().toDate()}
      defaultView="month"
      events={events}
      localizer={localizer}
      style={{ height: "100vh" }}
      eventPropGetter={(event) => {
        return {
          style: {
            backgroundColor: event.color || "royalblue",
          },
        };
      }}
      components={{
        event: ({ event }) =>
          Event({
            event,
            changeEvent: changeEvent.bind(null, events.indexOf(event)),
          }),
        dateCellWrapper: ({ children, value }) =>
          Slot({ children, value, createEvent }),
        timeSlotWrapper:({ children, value }) =>
          Slot({ children, value, createEvent }),
      }}
    />
  );
}
