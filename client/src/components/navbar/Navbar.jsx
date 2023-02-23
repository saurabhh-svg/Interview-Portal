import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Logo from "../../assets/logo.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./navbar.css";
 import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton>
          <img className="logo" src={Logo} alt="logo" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Umbrella Academy
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            //onClick={() => navigate("/schedule")}
          >
            Home
          </Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">
            <AccountCircleIcon fontSize="large" />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
