import { Box } from "@mui/material";
import Sidebar from "../Components/HomeProfile/Sidebar";
import Navbar from "../Components/HomeProfile/Navbar";
import { Outlet } from "react-router-dom";
import FooterProfile from "./HomeProfile/FooterProfile";
import { useContext } from "react";
import { LoadingContext, TokenContext } from "./context/Context";

function Layout2() {
  let { sidebarOpen } = useContext(TokenContext);
  let { isLoading } = useContext(LoadingContext);

  return (
    <Box>
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            textAlign: "center",
          }}
        >
          <span className="loader" style={{ fontFamily: "Bayon" }}>
            Trading Society
          </span>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Navbar />

          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexShrink: 0 }}>
              <Sidebar />
            </Box>

            <Box
              sx={{
                py: "10%",
                width: sidebarOpen ? "75%" : "90%",
                mx: "auto",
                position: "relative",
                left: { xs: "48%", xl: "45%" },
                transform: "translateX(-50%)",
                transition: "width 0.3s ease",
              }}
            >
              <Outlet />
            </Box>
          </Box>

          <Box>
            <FooterProfile />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Layout2;
