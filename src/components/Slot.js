import React, { Children } from "react";
import EventPopper from "./EventPopper/EventPopper";

export default function Slot({ children, value, createEvent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "event-popper" : undefined;

  const togglePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      {React.cloneElement(Children.only(children), { onClick: togglePopper })}
      <EventPopper
        event={{ start: value }}
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={togglePopper}
        onChangeEvent={createEvent}
        isNewEvent
      />
    </>
  );
}
