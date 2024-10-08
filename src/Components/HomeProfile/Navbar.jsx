import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import { DarkModeContext, TokenContext } from "../context/Context";
import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let { sidebarOpen, setSidebarOpen } = useContext(TokenContext);
  let sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let navigate = useNavigate();

  let { darkMode } = useContext(DarkModeContext);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: darkMode ? "#000" : "#6B5B3D",
        pl: sidebarOpen ? "300px" : "0px",
        position: "fixed",
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // لضمان توزيع المساحة بين الشعار والـ menu
          width: "100%",
       
          
        }}
      >
        {/* الشعار */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            // flexGrow: 1, // لزيادة المساحة المخصصة للشعار
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Box component="img" src={logo} sx={{ height: "50px" }} />
          <Box component="img" src={brand} sx={{ height: "50px", ml: 2 }} />
        </Box>

        {/* الـ menu */}
        <Box
          onClick={sidebarToggle}
          sx={{
            color: "#fff",
            // padding: "12px",
            fontSize: "30px",
            mr: sidebarOpen? "20%":"0",
            cursor: "pointer",
            display: "flex", // للتأكد من أن الـ menu قابل للنقر بسهولة
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
