import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="#c9c8c5"
                textColor="#c9c8c5"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to='/Landpage'> <Tab label="Home" /> </Link>
                <Link to='/Question'> <Tab label="Questions" /> </Link>
                <Link to='/aboutus'> <Tab label="AboutUs" />  </Link>
                <Link to='/Contactus'> <Tab label="Contact" />  </Link>
              </Tabs>
              <Link to='/Signin'>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;