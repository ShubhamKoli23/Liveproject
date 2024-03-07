import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [authenticated, setAuthenticated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the anchor element for the menu

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0077B6" }}>
        <Toolbar>
          <Typography>Abacus</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="#E6F4F1"
                textColor="#E6F4F1"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to='/'> <Tab label="Home" sx={{ color: "#000000" }}/> </Link>
                <Link to='/Question'> <Tab label="Questions"sx={{ color: "#000000" }}/> </Link>
                <Link to='/aboutus'> <Tab label="AboutUs" sx={{ color: "#000000" }} />  </Link>
                <Link to='/Contactus'> <Tab label="Contact" sx={{ color: "#000000" }}/>  </Link>
              </Tabs>
              {authenticated ? (
                <>
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    onClick={handleClick}
                  >
                    Profile
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                   <Link to='/Accountinfo'> <MenuItem onClick={handleClose}>Account setting</MenuItem> </Link>
                   <Link to='/Changepass'><MenuItem onClick={handleClose}>Change password</MenuItem> </Link>
                   <Link to='/Logout'> <MenuItem onClick={handleClose} sx={{ color: 'red' }} >Logout</MenuItem></Link>
                  </Menu>
                </>
              ) : (
                <Link to='/Signin'>
                  <Button sx={{ marginLeft: "auto" }} variant="contained">
                    Login
                  </Button>
                </Link>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
