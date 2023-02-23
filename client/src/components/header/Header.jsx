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
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Link to="/">
          <IconButton>
            <img className="logo" src={Logo} alt="logo" />
          </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Umbrella Academy
        </Typography>
        <Stack direction="row" className="align-items-baseline" spacing={2}>
          <Link to="/">
            {" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>
          <Button color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <AccountCircleIcon fontSize="large" />
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
