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
import { motion } from "framer-motion"; // استيراد Framer Motion
import logo from "../../assets/Untitled-1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/home",
      subLinks: ["Sub Home 1", "Sub Home 2", "Sub Home 3", "Sub Home 4"],
    },
    {
      name: "ACADEMY",
      path: "/academy",
      subLinks: [
        "Sub Academy 1",
        "Sub Academy 2",
        "Sub Academy 3",
        "Sub Academy 4",
      ],
    },
    {
      name: "SESSION",
      path: "/sessions",
      subLinks: [
        "Sub Session 1",
        "Sub Session 2",
        "Sub Session 3",
        "Sub Session 4",
      ],
    },
    {
      name: "TRADE ALERTS",
      path: "/tradealerts",
      subLinks: ["Sub Trade 1", "Sub Trade 2", "Sub Trade 3", "Sub Trade 4"],
    },
    {
      name: "SCANNERS",
      path: "/scanners",
      subLinks: [
        "Sub Scanner 1",
        "Sub Scanner 2",
        "Sub Scanner 3",
        "Sub Scanner 4",
      ],
    },
    {
      name: "LOGIN",
      path: "/login",
      subLinks: ["Sub Login 1", "Sub Login 2", "Sub Login 3", "Sub Login 4"],
    },
    {
      name: "JOIN US",
      path: "/register",
      subLinks: ["Sub Join 1", "Sub Join 2", "Sub Join 3", "Sub Join 4"],
    },
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

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
    setOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    setOverlayVisible(false);
  };

  return (
    <Box sx={{}}>
      <AppBar
        className="navbar"
        sx={{
          position: scrolling ? "fixed" : "fixed",
          background: "#000000",
          maxWidth: scrolling ? { xs: "100%", md: "91%" } : "100%",
          height: "80px",
          zIndex: "9999",
          transition: "300ms all ease",
          mx: "auto",
          mb: scrolling ? "0" : "30px",
          backdropFilter: "blur(15.699999809265137px)",
          display: "flex",
          justifyContent: "center",
          padding: { xs: "0 20px", md: "0 350px" }, // تعديل padding للشاشات الصغيرة
          transform: scrolling ? { xs: "0", md: "translateX(-4%)" } : "0",
          top: "0",
        }}
      >
        {/* استخدام motion.div للـ overlay مع إعدادات الحركة */}
        <motion.div
          className="overlay"
          initial={{ opacity: 0, y: -50 }} // نقطة البداية
          animate={{ opacity: overlayVisible ? 1 : 0, y: overlayVisible ? 0 : -50 }} // الحركة عند العرض والإخفاء
          transition={{ duration: 0.5, ease: "easeInOut" }} // إعدادات الانتقال
          style={{
            position: "absolute",
            backgroundColor: "black",
            width: "100%",
            left: "0",
            right: "0",
            top: "100%",
            height: "300px",
            display: overlayVisible ? "block" : "none",
            zIndex: 999,
          }}
          onMouseLeave={handleMouseLeave} // إغلاق الـ overlay عند الخروج منها
        >
          {/* عرض الروابط الفرعية */}
          {hoveredLink && (
            <Box
              sx={{
                padding: "10px",
                fontSize: "22px",
                display: "flex",
                gap: "30px",
              }}
            >
              {links
                .find((link) => link.name === hoveredLink) // البحث عن الرابط الرئيسي
                .subLinks.map((subLink, index) => (
                  <Link
                    key={index}
                    to="#"
                    style={{
                      display: "block",
                      padding: "5px 0",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {subLink}
                  </Link>
                ))}
            </Box>
          )}
        </motion.div>

        <Toolbar
          sx={{
            transition: "all 1s ease",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component="img"
              src={logo}
              sx={{
                maxWidth: { xs: "50px", md: "70px" }, // تصغير الشعار للشاشات الصغيرة
                maxHeight: { xs: "50px", md: "70px" },
                animation: "fadeIn 0.5s ease",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: "20px", md: "90px" }, // تقليص الفجوة بين الروابط للشاشات الصغيرة
              alignItems: "center",
            }}
          >
            {links.map((link) => (
              <Box
                key={link.name}
                sx={{
                  position: "relative",
                  "&:hover": {
                    ...(link.name !== "JOIN US" && {
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: "100%",
                        backgroundColor: "#ecbc56",
                        width: "100%",
                        height: "3px",
                      },
                    }),
                  },
                }}
              >
                <Link
                  to={link.path}
                  className="link"
                  onMouseEnter={() => {
                    if (link.name !== "JOIN US") {
                      handleMouseEnter(link.name);
                    }
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "16px", md: "20px" }, // تصغير حجم النص للشاشات الصغيرة
                      ...(link.name === "JOIN US" && {
                        background:
                          "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "95px",
                        height: "36px",
                        borderRadius: "5px",
                        position: "relative",
                        "&:hover": {
                          background:
                            "linear-gradient(180deg, #5D5329 0%, #D6AA1C 100%)",
                          display: "flex",
                          transition: "color 0.3s ease",
                        },
                      }),
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleToggle}
          >
            <FaBars size={24} color="#fff" />
          </IconButton>
        </Toolbar>

        {/* Drawer for mobile */}
        <Drawer anchor="left" open={isOpen} onClose={handleToggle} sx={{zIndex:'9999999'}}>
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
