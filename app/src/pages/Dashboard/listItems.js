import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const mainListItems = (
  <>
    <ListItemButton as={RouterLink} to="/inventory">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton> */}
    <ListItemButton as={RouterLink} to="/">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </>
);
