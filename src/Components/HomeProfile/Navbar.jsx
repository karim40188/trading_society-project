import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import { DarkModeContext, TokenContext } from "../context/Context";
import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import lang_img from "../../home_profile_assets/lang.png";
import mode_switcher_img from "../../home_profile_assets/mode_switch.png";
import notification_img from "../../home_profile_assets/notification.png";

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
        width: sidebarOpen ? "calc(100% - 300px)" : "100%",
        left: sidebarOpen ? "300px" : "0",
        height: "100px",
        position: "fixed",
        top: 0,
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
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
          <Box component="img" src={logo} sx={{ height: "50px" }} />
          <Box component="img" src={brand} sx={{ height: "50px", ml: 2 }} />
        </Box>
      </Box>

      {/* الـ menu مع الأيقونات */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: "10px", // المسافة من الجانب الأيمن
          gap: "15px", // المسافة بين الأيقونات و menu
        }}
      >
        {/* الأيقونات */}
        <Box
          sx={{
            display: "flex",
            gap: "5px", // تقليل المسافات بين الأيقونات
            alignItems: "center",
          }}
        >
          <Box component="img" src={lang_img} />
          <Box component="img" src={mode_switcher_img} onClick={toggleMode} />
          <Box component="img" src={notification_img} />
        </Box>

        {/* الـ menu */}
        <Box
          onClick={sidebarToggle}
          sx={{
            color: "#fff",
            fontSize: "30px",
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
