import { Box, Button, Divider, Typography } from "@mui/material";
import imgBg from "../../home_profile_assets/img_bg.png";
import profile_img from "../../home_profile_assets/profile_img.png";

import { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { DarkModeContext, TokenContext } from "../context/Context";
import sideBar_img from "../../home_profile_assets/sidebar_img.png";

function Sidebar() {
  let [activeLink, setActiveLink] = useState(false);
  let { toggleMode } = useContext(DarkModeContext);
  let { sidebarOpen } = useContext(TokenContext);
  let navigate = useNavigate();

  let [links] = useState([
    { name: "Home", path: "/home", icon: <AiOutlineHome /> },
    { name: "Academy", path: "/academy", icon: <GoMortarBoard /> },
    { name: "Live Session", path: "/sessions", icon: <IoIosRadio /> },
    { name: "Leader Board", path: "/leaderboard", icon: <MdLeaderboard /> },
    { name: "Trade Alerts", path: "/tradealerts", icon: <FaExchangeAlt /> },
    { name: "Calenders", path: "/calender", icon: <SlCalender /> },
    { name: "News", path: "/news", icon: <LuNewspaper /> },
  ]);

  return (
    <>
      {/* Sidebar */}
      <Box
        sx={{
          width: "302px",
          position: "fixed",
          display: sidebarOpen ? "block" : "none",
          top: "0",
          bottom: "0",
          height: "100%", // ضمان أن الـ Sidebar يأخذ 100% من ارتفاع الشاشة بدون شريط تمرير
          zIndex: "9999999",
          overflow: "hidden", // إخفاء أي محتوى زائد
          transition: "transform 0.3s ease-in-out", // إضافة تأثير الانتقال
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", // إخفاء الشريط الجانبي عن طريق التحريك

        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
            top: "-50px",
            width: "100%",
            backgroundColor: "#ecbc56",
          }}
        >
          <Box
            component="img"
            src={sideBar_img}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${imgBg})`,
            width: "100%", // تقليل عرض الصورة الخلفية
            height: "120px", // تقليل ارتفاع الصورة الخلفية
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "10px", // تقليل المسافة العلوية
            transform: "translateX(10px)", // تقليل المسافة الأفقية
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src={profile_img} />
            <Box sx={{ ml: "10px" }}>
              <Typography
                sx={{
                  fontSize: "20px", // تقليل حجم الخط
                  fontWeight: "500",
                  fontFamily: "Motken noqta ii",
                  letterSpacing: "-4%",
                  color: "text.primary",
                }}
              >
                Amr Omar
              </Typography>
              <Typography
                sx={{
                  fontFamily: "TanseekModernProArabic-ExBold",
                  fontSize: "20px", // تقليل حجم الخط
                  fontWeight: "400",
                  letterSpacing: "-4%",
                }}
              >
                Id : 123456
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px", // تقليل المسافات بين العناصر
            zIndex: "99999",
            color: "#fff",
          }}
        >
          {links.map((link) => {
            return (
              <Box
                key={link.name}
                component="li"
                sx={{
                  listStyleType: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px", // تقليل المسافة بين الأيقونة والنص
                  p: "8px", // تقليل Padding للعنصر
                  cursor: "pointer",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // تكبير العنصر عند التمرير
                    backgroundColor: "#ecbc56", // تغيير اللون عند التمرير
                  },
                }}
                onClick={(e) => {
                  if (activeLink) {
                    activeLink.classList.remove("active");
                  }
                
                  // إضافة العنصر الحالي كـ active
                  const currentLink = e.currentTarget;
                  currentLink.classList.add("active");
                  setActiveLink(currentLink);
                
                  // التوجيه للنقر
                  navigate(`${link.path}`);
                  window.scrollTo(0, 0);
                }}
                
              >
                <Box
                  sx={{ fontSize: "24px", ml: "20px", color: "text.primary" }}
                >
                  {link.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Motken noqta ii",
                    fontSize: "12px", // تقليل حجم النص
                    letterSpacing: "-4%",
                    color: "#fff",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            );
          })}
          <Button
            variant="contained"
            sx={{
              width: "120px", // تقليل عرض الزر
              height: "36px", // تقليل ارتفاع الزر
              backgroundColor: "#5e532a",
              fontFamily: "Bayon",
              fontSize: "20px", // تقليل حجم الخط
              fontWeight: "400",
              margin: "auto",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* Icon Bar (appears when sidebarOpen is false) */}
      {!sidebarOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0", // change to "right" for the other side
            display: "flex",
            flexDirection: "column",
            gap: "15px", // تقليل المسافة بين الأيقونات
            p: "10px",
            backgroundColor: "#333",
            borderRadius: "0 10px 10px 0",
            zIndex: "1300",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.name}
              sx={{
                fontSize: "24px",
                color: "#fff",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)", // تكبير العنصر عند التمرير
                  color: "#ecbc56", // تغيير اللون عند التمرير
                },
              }}
              onClick={() => navigate(`${link.path}`)}
            >
              {link.icon}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

export default Sidebar;
