import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import { DarkModeContext, TokenContext } from "../context/Context";
import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import lang_img from "../../home_profile_assets/lang.png";
import { IoMdNotifications } from "react-icons/io";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Navbar() {
  let { sidebarOpen, setSidebarOpen } = useContext(TokenContext);
  let sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let navigate = useNavigate();
  let { darkMode, toggleMode } = useContext(DarkModeContext);

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#000" : "#6B5B3D",
        width: sidebarOpen ? { xs: "100%", md: "calc(100% - 300px)" } : "100%",
        left: sidebarOpen ? { xs: 0, md: "300px" } : "0",
        height: "80px",  // تقليل الارتفاع على الشاشات الصغيرة
        position: "fixed",
        top: 0,
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
        paddingX: { xs: "10px", md: "20px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* الشعار */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Box component="img" src={logo} sx={{ height: { xs: "40px", md: "50px" }, width: 'auto' }} />
          <Box component="img" src={brand} sx={{ height: { xs: "40px", md: "50px" }, ml: { xs: 1, md: 2 }, width: 'auto' }} />
        </Box>
      </Box>

      {/* الـ menu مع الأيقونات */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          flexDirection:{xs:'row-reverse',md:'row'},
          right: "60px", 
          gap: { xs: "10px", md: "15px" },
        }}
      >
        {/* الأيقونات */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", md: "20px" }, 
            alignItems: "center",
          }}
        >
          <Box component="img" src={lang_img} sx={{ width: { xs: "20px", md: "30px" } }} />
          <div style={{ cursor: 'pointer' }} onClick={toggleMode}>
            {darkMode ? <MdLightMode style={{ color: "#ecbc56", fontSize: "20px" }} /> : <MdDarkMode />}
          </div>
          <IoMdNotifications style={{ color: "#ecbc56", fontSize: '20px' }} />
        </Box>

        {/* الـ menu */}
        <Box
          onClick={sidebarToggle}
          sx={{
            color: "#fff",
            fontSize: { xs: "25px", md: "30px" },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          
          }}
        >
          <CiMenuBurger />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
