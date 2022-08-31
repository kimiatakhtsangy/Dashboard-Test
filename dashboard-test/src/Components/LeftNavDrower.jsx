import {
  AccountCircle,
  Dashboard,
  Home,
  Login,
  Logout,
  MultipleStop,
  Notifications,
  Receipt,
  TableView,
} from "@mui/icons-material";
import { List, Typography } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/material";

const LeftNavDrower = () => {
  return (
    <Box
      color="white"
      display="flex"
      flexDirection="column"
      position="fixed"
      sx={{ display: { xs: "none", sm: "block" } }}
      height=" 100%"
      width="18%"
      borderRadius=" 0.75rem"
      top="0"
      margin="1rem"
    >
      <Typography
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.87)",
          padding: " 24px 32px 8px",
          textAlign: "center",
          color: "white",
          display: "block",
          opacity: "1",
          fontSize: "1rem",
          fontWeight: "bold",
          lineHeight: "1.6",
          borderRadius: "0.75rem",
        }}
      >
        Material Dashboard 2
      </Typography>
      <Divider
        sx={{
          height: "0.06rem",
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "transparent",
          borderTop: "0px solid rgba(0, 0, 0, 0.08)",
          borderRight: "0px solid rgba(0, 0, 0, 0.08)",
          borderLeft: "0px solid rgba(0, 0, 0, 0.08)",
          borderBottom: "none",
          opacity: "0.25",
        }}
      />
      <Box

        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.9) ",
          borderRadius: "0.7rem",
          height: "90%",

        }}
      >
        <List
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            height: "100%",
            borderRadius: "0.7rem",
          }}
        >
          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
                },
              }}
              href="#dashboard"
            >
              <ListItemIcon>
                <Dashboard
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{fontWeight  : "100"}} />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton
              href="#table"
              sx={{
          
                borderRadius: "0.8em",
                "&:hover  ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <TableView
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Table"    sx={{fontWeight : "lighter"}} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              href="#Billing"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <Receipt
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Billing" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="#RTL"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <MultipleStop
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="RTL" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="#notifications"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <Notifications
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="#profile"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <AccountCircle
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="#login"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <Login
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="SignIn" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="#logout"
              sx={{
                borderRadius: "0.8em",
                "&:hover ": {
                  backgroundColor: "rgb(26, 115, 232)",
                  borderRadius: "0.70rem",
               
                },
              }}
            >
              <ListItemIcon>
                <Logout
                  style={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="SignOut" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default LeftNavDrower;