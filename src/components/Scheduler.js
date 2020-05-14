import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Event from "./Event";
import Slot from "./Slot";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

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
    let nextEvents = [...events];

    if (!event) {
      nextEvents.splice(index, 1);
    } else {
      nextEvents.splice(index, 1, event);
    }

    setEvents(nextEvents);
  };

  const updateEvent = ({ event, start, end }) => {
    const index = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    let nextEvents = [...events];
    nextEvents.splice(index, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const DragAndDropCalendar = withDragAndDrop(Calendar);
  const localizer = momentLocalizer(moment);

  return (
    <DragAndDropCalendar
      selectable
      resizable
      popup
      className="calendar"
      defaultDate={moment().toDate()}
      defaultView="month"
      events={events}
      localizer={localizer}
      onEventDrop={updateEvent}
      onEventResize={updateEvent}
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
      }}
    />
  );
}
