import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
// import { DarkModeContext } from "../context/Context";
import logo from "../../assets/logo.png";
import branding from "../../assets/branding_name.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const links = [
    { name: "HOME", path: "/home" },
    { name: "ACADEMY", path: "/academy" },
    { name: "SESSION", path: "/sessions" },
    { name: "TRADE ALERTS", path: "/tradealerts" },
    { name: "SCANNERS", path: "/scanners" },
    { name: "LOGIN", path: "/login" },
    { name: "JOIN US", path: "/register" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <AppBar
        sx={{
          position: scrolling ? "fixed" : "static",
          background: "#48484880",
          maxWidth: scrolling ? "91%" : "100%",
          height: "80px",
          borderRadius: scrolling ? "15px" : "15px",
          zIndex: 999900,
          transition: "500ms all ease",
          mx: "auto",
          mb: scrolling ? "0" : "30px",
          backdropFilter: "blur(15.699999809265137px)",
          display: "flex",
          justifyContent: "center",
          transform: scrolling ? "translateX(-50%)" : "0",
          left: scrolling ? "50%" : "",
        }}
      >
        <Toolbar
          sx={{
            transition: "all 1s ease",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component="img"
              src={logo}
              sx={{
                maxWidth: "50px",
                maxHeight: "50px",
                animation: "fadeIn 0.5s ease",
              }}
            />
            <Box
              component="img"
              src={branding}
              sx={{
                maxWidth: { xs: "100px", md: "175px" },
                maxHeight: "38px",
                ml: 1,
                mt: "3px",
                animation: "fadeIn 0.5s ease",
              }}
            />
          </Box>

          {/* Links for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            {links.map((link) => (
              <Link key={link.name} to={link.path} className="active-link">
                {link.name === "JOIN US" ? (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "20px", xl: "25px" },
                      animation: "slideIn 0.5s ease",
                      background:
                        "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "143px",
                      height: "41px",
                      borderRadius: "5px",
                      position: "relative",

                      // "&:hover": {
                      //   color: "#ECBC56",
                      //   transition: "color 0.3s ease",

                      // },
                    }}
                  >
                    JOIN US
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "20px", xl: "25px" },
                      animation: "slideIn 0.5s ease",
                      position: "relative",
                      "&:hover": {
                        color: "#ECBC56",
                        transition: "color 0.3s ease",
                        "&::after": {
                          content: "''",
                          position: "absolute",
                          backgroundColor: "#ECBC56",
                          width: "100%",
                          height: "3px",
                          top: "100%",
                          right: "0",
                          left: "0",
                        },
                      },
                    }}
                    // onClick={(e) => {
                    //   e.target.classList.add("active-link");
                    // }}
                  >
                    {link.name}
                  </Typography>
                )}
              </Link>
            ))}
          </Box>

          {/* Hamburger menu for smaller screens */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleToggle}
          >
            <FaBars size={24} color="#fff" />
          </IconButton>
        </Toolbar>

        {/* Drawer for mobile */}
        <Drawer anchor="left" open={isOpen} onClose={handleToggle}>
          <Box sx={{ width: 250 }} role="presentation">
            <IconButton onClick={handleToggle}>
              <FaTimes />
            </IconButton>
            <List>
              {links.map((link) => (
                <ListItem button key={link.name} onClick={handleToggle}>
                  <Link
                    to={link.path}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <ListItemText primary={link.name} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}

export default Navbar;
