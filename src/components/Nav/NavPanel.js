import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import avatar from "../../images/Avatar.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "inherit",
    color: "#BCBCCB",
    boxShadow: "none",
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "25rem",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
    width: "100%",
    fontSize: 14,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function NavPanel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search transactions, invoices or help…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton aria-label="Help" color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton aria-label="Chat Room" color="inherit">
              <ForumRoundedIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge variant="dot" overlap="circle" color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <span>John Doe</span>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ExpandMoreIcon />
              <img src={avatar} alt="avatar" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
