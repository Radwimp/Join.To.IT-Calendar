import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";

const useStyles = makeStyles({
  card: {
    width: 225,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  closeButton: {
    position: "absolute",
    right: 5,
    top: 15,
    zIndex: 6,
    padding: 5,
  },
  input: {
    margin: 7,
  },
  buttonsContainer: {
    justifyContent: "space-around",
  },
  cancelButton: {
    color: "#FF5F5F",
  },
  saveButton: {
    color: "#6A6996",
  },
});

const colors = [
  { value: "royalblue", label: "blue" },
  { value: "green", label: "green" },
  { value: "purple", label: "purple" },
  { value: "orange", label: "orange" },
];

export default function EventPopperContent({
  event,
  onChangeEvent,
  onClose,
  isNewEvent,
}) {
  const [name, setName] = useState(event.name || "Event name");
  const [date, setDate] = useState(event.start || moment().toDate());
  const [notes, setNotes] = useState(event.desc || "");
  const [color, setColor] = useState(event.color || "royalblue");
  const [nameError, setNameError] = useState("");
  const [notesError, setNotesError] = useState("");
  const classes = useStyles();

  const handleSave = () => {
    if (!notes) {
      setNotesError("Field is required");
      return;
    }

    onChangeEvent({
      start: date,
      end: moment(date).add(3, "hour").toDate(),
      title: name,
      desc: notes,
      color,
    });
  };

  const handleDiscard = () => {
    onChangeEvent(null);
  };

  const defaultInputProps = {
    required: true,
    className: classes.input,
    size: "small",
    InputLabelProps: {
      shrink: true,
    },
  };

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <HighlightOffOutlinedIcon />
        </IconButton>
        <TextField
          {...defaultInputProps}
          label="event name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(e.target.value.length === 0 ? "Field is required"
                : e.target.value.length > 30 && "More than 30 chars");
          }}
          error={!!nameError}
          helperText={nameError}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            {...defaultInputProps}
            label="Date picker dialog"
            format="dd/MM/yyyy"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            {...defaultInputProps}
            label="Time picker"
            value={date}
            onChange={setDate}
            keyboardIcon={<AccessTimeIcon />}
            ampm={false}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          {...defaultInputProps}
          label="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            setNotesError(e.target.value.length === 0 && "Field is required");
          }}
          error={!!notesError}
          helperText={notesError}
        />
        <TextField
          {...defaultInputProps}
          select
          label="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ width: "92.5%" }}
        >
          {colors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>
      <CardActions className={classes.buttonsContainer}>
        <Button
          className={classes.cancelButton}
          size="small"
          onClick={isNewEvent ? onClose : handleDiscard}
        >
          {isNewEvent ? "Cancel" : "DISCARD"}
        </Button>
        <Button
          className={classes.saveButton}
          size="small"
          onClick={handleSave}
          disabled={!!nameError || !!notesError || isNaN(Date.parse(date))}
        >
          {isNewEvent ? "Save" : "EDIT"}
        </Button>
      </CardActions>
    </Card>
  );
}
