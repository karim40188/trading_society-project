import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vector from "../../assets/vector_card.png";
import logo from "../../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import'../../../node_modules/swiper/modules/autoplay.css'
// Import Swiper styles
import "swiper/css/autoplay"; // استيراد CSS الخاص بالـ autoplay

import { Autoplay } from "swiper/modules";

function Academy() {
  const [cards] = useState([
    {
      level: "Beginner",
      content: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
      Prerequisites: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
    },
    {
      level: "Intermediate",
      content: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
      Prerequisites: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
    },
    {
      level: "Advanced",
      content: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
      Prerequisites: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
    },
    // إضافة كاردين إضافيين
    {
      level: "Expert",
      content: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
      Prerequisites: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
    },
    {
      level: "Master",
      content: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
      Prerequisites: [
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
        "Neque porro quisquam est qui dolorem ipsum quia.",
      ],
    },
  ]);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "36px", md: "45px" },
          textTransform: "uppercase",
          my: "40px",
          textAlign: "left",
          color: "text.primary",
        }}
      >
        Academy
      </Typography>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: { xs: "343px", xl: "460px" },
                height: { xs: "502px", xl: "615px" },
                borderRadius: "15px",
                background:
                  "linear-gradient(34.82deg, #000000 48.98%, #665B2E 89.31%, #C3AD57 104.99%)",
                position: "relative",
                // margin: "0 600px", // إضافة مسافة بين الكروت
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    mt: "30px",
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      xl: "30px",
                    },
                    fontFamily: "TanseekModernProArabic-ExBold",
                    textAlign: "left",
                    color: "#FFFFFF",
                    ml: "20px",
                  }}
                >
                  {card.level}
                </Typography>
                <Box
                  component="img"
                  src={logo}
                  sx={{
                    position: "absolute",
                    top: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "auto",
                    opacity: "0.27",
                  }}
                />
              </Box>

              <Box
                component="img"
                src={vector}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "304.52px",
                  height: "269.15px",
                  // zIndex: -1,
                }}
              />
              <Typography
                sx={{
                  mt: "20px",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", xl: "30px" },
                  color: "#FFFFFF",
                  textAlign: "left",
                  ml: "20px",
                }}
              >
                Course Content
              </Typography>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {card.content.map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      fontFamily: "TanseekModernProArabic-ExBold",
                      listStyleType: "disc",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "17px",
                        xl: "27px",
                      },
                      color: "#FFFFFF",
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: "10px" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                      xl: "30px",
                    },
                    color: "#FFFFFF",
                    ml: "20px",
                  }}
                >
                  Prerequisites:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    mt: "5px",
                  }}
                >
                  {card.Prerequisites.map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        fontFamily: "TanseekModernProArabic-ExBold",
                        listStyleType: "disc",
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "17px",
                          xl: "27px",
                        },
                        color: "#FFFFFF",
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#88783C",
                  minWidth: "76px",
                  minHeight: "28px",
                  // fontSize: { xs: "10px", sm: "11px" },
                  fontWeight: "400",
                  fontFamily: "TanseekModernProArabic-ExBold",
                  letterSpacing: "-0.17px",
                  boxShadow: "0px 0px 3.3px 0px #FFFFFF40",
                  color: "#fff",
                  mt: "30px",
                  ml: "auto",
                  mr: "60px",
                  display: "block",
                  borderRadius: "5px",
                  textTransform: "capitalize",
                  fontSize:'19px',
                  padding:'5px' 
                }}
              >
                Start Your Journey
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Academy;
