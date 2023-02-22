import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Logo from "../../assets/logo.jpeg";
import "./navbar.css";
export default class Navbar extends Component {
  render() {
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
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}
