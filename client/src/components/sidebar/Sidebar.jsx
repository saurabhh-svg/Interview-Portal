import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }} position="">
          <List>
            <ListItem
              key={0}
              disablePadding
              onClick={() => navigate("/schedule")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <VideoCallIcon />
                </ListItemIcon>
                <ListItemText primary={"Schedule an Interview"} />
              </ListItemButton>
            </ListItem>
            <ListItem
              key={1}
              disablePadding
              onClick={() => navigate("/upcoming")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AutoStoriesIcon />
                </ListItemIcon>
                <ListItemText primary={"View Upcoming Interview"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
