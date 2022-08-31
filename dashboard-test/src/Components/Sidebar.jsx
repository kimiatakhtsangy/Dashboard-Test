import { AccountCircle, Dashboard, Home, Login, Logout, MultipleStop, Notifications, Receipt, TableView } from "@mui/icons-material";
import { List } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/material";
import react, { Profiler } from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="grey"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      height="100%"
    >
      <Box>Material Dashboard 2</Box>
    <Divider  varient = "inset"/>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TableView />
            </ListItemIcon>
            <ListItemText primary="Table" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Receipt />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MultipleStop />
            </ListItemIcon>
            <ListItemText primary="RTL" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText primary="SignIn" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="SignOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

