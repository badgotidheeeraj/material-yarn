import React, { useState, useCallback } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const DrawerComponent = ({ left, toggleDrawerHandler }) => {
  const classes = useStyles();

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div> 
    
  );

  return (
    <>
    <Drawer open={left} onClose={toggleDrawerHandler}>
      {sideList("left")}
    </Drawer>

    </>
  );
};

  export default DrawerComponent;
