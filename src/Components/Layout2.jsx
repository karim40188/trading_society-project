import { Box } from "@mui/material";
import Sidebar from "../Components/HomeProfile/Sidebar";
import Navbar from "../Components/HomeProfile/Navbar";
// import Footer from "../Components/Home/Footer";
import { Outlet } from "react-router-dom";
import FooterProfile from "./HomeProfile/FooterProfile";
import { useContext } from "react";
import { LoadingContext, TokenContext } from "./context/Context";
// import logo from "../../assets/logo.png";
// import vector from "../../assets/vector_card.png";

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
            // overflow: "hidden",
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <span className="loader" style={{ fontFamily: "Bayon" }}>
            Trading Society
          </span>
        </Box>
      ) : (
        <Box sx={{}}>
          <Navbar />

          <Box sx={{ display: "flex" }}>
            <Box>
              <Sidebar />
            </Box>
            <Box
              sx={{
                ml: sidebarOpen ? { xs: "70%", md: "20%", xl: "15%" } : "5%",
                minHeight: "70vh",
                width: "100%",
                padding: "40px",
                // backgroundColor: "background.default",
              }}
            >
              <Box sx={{ py: "10%" }}>
                <Outlet />
              </Box>
            </Box>
          </Box>
          <Box sx={{ pl: sidebarOpen ? "300px" : "" }}>
            <FooterProfile />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Layout2;
