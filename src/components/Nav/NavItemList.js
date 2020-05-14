import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#A5A4BF',
    minWidth: 36,
    marginTop: -5,
  },
}));
export default function NavItemList() {
  const classes = useStyles();

  return (
    <List>
      <ListItem button key="Home">
        <ListItemIcon className={classes.icon}>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button key="Dashboard">
        <ListItemIcon className={classes.icon}>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button key="Inbox">
        <ListItemIcon className={classes.icon}>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button key="Products">
        <ListItemIcon className={classes.icon}>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button key="Invoices">
        <ListItemIcon className={classes.icon}>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItem>
      <ListItem button key="Customers">
        <ListItemIcon className={classes.icon}>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button key="Chat Room">
        <ListItemIcon className={classes.icon}>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="Chat Room" />
      </ListItem>
      <ListItem button selected key="Calendar">
        <ListItemIcon className={classes.icon}>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button key="Help Center">
        <ListItemIcon className={classes.icon}>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help Center" />
      </ListItem>
      <ListItem button key="Settings">
        <ListItemIcon className={classes.icon}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  )
}
