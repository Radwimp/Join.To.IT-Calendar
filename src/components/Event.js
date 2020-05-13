import React from "react";
import EventPopper from "./EventPopper/EventPopper";

export default function Event({ event, changeEvent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "event-popper" : undefined;

  const togglePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      <div onClick={togglePopper}>
        <strong>{event.title}</strong>
        {event.desc && ":  " + event.desc}
      </div>
      <EventPopper
        event={event}
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={togglePopper}
        onChangeEvent={changeEvent}
      />
    </>
  );
}
