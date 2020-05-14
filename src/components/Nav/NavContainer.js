import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import NavItemList from "./NavItemList";
import NavPanel from "./NavPanel";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "white",
    boxShadow: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#43425D",
    color: "#FFFFFF",
  },
  logo: {
    minHeight: 64,
    backgroundColor: "#3b3a52",
    color: "white",
    padding: "22px 14px",
    fontWeight: 700,
    letterSpacing: 4,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#F0F0F7",
    padding: theme.spacing(7),
  },
  title: {
    fontSize: 28,
    margin: "2.5rem 0 1rem",
  },
}));

export default function NavContainer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <NavPanel />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.logo}>
          <span>IMPEKABLE</span>
        </div>
        <NavItemList />
      </Drawer>
      <main className={classes.content}>
        <Container fixed>
          <Typography className={classes.title}>Calendar</Typography>
          {children}
        </Container>
      </main>
    </div>
  );
}
