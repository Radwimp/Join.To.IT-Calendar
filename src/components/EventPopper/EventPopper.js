import React from "react";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import EventPopperContent from "./EventPopperContent";

const useStyles = makeStyles({
  popper: {
    zIndex: 4444,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent #43425D transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `#43425D transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent #43425D transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent #43425D`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
});

export default function EventPopper({
  event,
  id,
  anchorEl,
  open,
  onClose,
  onChangeEvent,
  isNewEvent,
}) {
  const [arrowRef, setArrowRef] = React.useState(null);
  const classes = useStyles();

  return (
    <Popper
      className={classes.popper}
      id={id}
      open={open}
      anchorEl={anchorEl}
      modifiers={{
        preventOverflow: {
          enabled: true,
          boundariesElement: "scrollParent",
        },
        flip: {
          enabled: true,
        },
        arrow: {
          enabled: true,
          element: arrowRef,
        },
      }}
    >
      <span className={classes.arrow} ref={setArrowRef} />
      <EventPopperContent
        event={event}
        classes={classes}
        onChangeEvent={onChangeEvent}
        onClose={onClose}
        isNewEvent={isNewEvent}
      />
    </Popper>
  );
}
