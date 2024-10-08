import { Box, Grid2, Typography } from "@mui/material";
import missionImg from "../../assets/misson_img.png";
import mission from "../../assets/mission.png";
import visionImg from "../../assets/vision_img.png";
import vision from "../../assets/Vision.png";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion"; // استيراد Framer Motion

function MissionAndVision() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Grid2
        container
        justifyContent="center"
        spacing={3}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: "91%",
          mt:'180px'

        }}
      >

        {/* Mission Section */}
        <Grid2 size={{ xs: 12, md: 6 }} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "10px", md: "20px" },
                mb: { xs: "20px", md: "40px" },
              }}
            >
              <Box sx={{ width: "250px", height: "250px" }}>
                <motion.img
                  src={missionImg}
                  sx={{ width: "100%", height: "100%" }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
              <Box
                sx={{
                  width: "264px",
                  height: "41px",
                  transform: { xs: "translateX(0)", md: "translateX(-60px)" },
                }}
              >
                <motion.img
                  src={mission}
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "27px", xl: "32px" },
                color: "text.secondary",
                fontFamily: "TanseekModernProArabic-ExBold",
                fontWeight: "400",
                lineHeight: "1.5",
                maxWidth: { xs: "100%", md: "350px" },
                mx: "auto",
                transform: {
                  xs: "translateX(0)",
                  md: "translate(140px, -70px)",
                },
              
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our mission at Trading Society is to provide high-quality,
              easy-to-understand Forex education that empowers traders of all
              levels. We aim to build a strong, collaborative community where
              traders can share insights, learn from each other, and grow in a
              supportive environment.
            </Typography>
          </Box>
        </Grid2>

        {/* Vision Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "10px", md: "20px" },
                mb: { xs: "20px", md: "40px" },
              }}
            >
              <Box sx={{ width: "346px", height: "217px"}}>
                <motion.img
                  src={visionImg}
                  sx={{ width: "100%", height: "100%" }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
              <Box
                sx={{
                  width: "234px",
                  height: "36px",
                  transform: { xs: "translateX(0)", md: "translateX(-60px)" },
                }}
              >
                <motion.img
                  src={vision}
                  sx={{
                    width: { xs: "80%", md: "100%" },
                    height: "100%",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "27px", xl: "32px" },
                color: "text.secondary",
                fontFamily: "TanseekModernProArabic-ExBold",
                fontWeight: "400",
                lineHeight: "1.5",
                textAlign: { xs: "center", md: "left" },
                maxWidth: { xs: "100%", md: "362px" },
                mx: "auto",
                transform: {
                  xs: "translateX(0)",
                  md: "translate(180px, -30px)",
                },
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our vision is to create a global network of skilled traders who
              not only succeed individually but also contribute to the growth of
              a thriving, informed trading community. We envision a future where
              Forex trading is accessible, transparent, and rewarding for all.
            </Typography>
          </Box>
        </Grid2>

        {/* Decorative Images */}

        <Box
          sx={{
            width: {xs:"250px",md:"350px"},
            height: "350px",
            position: "absolute",
            top: { xs: "10%", md: "-5%" },
            right: { xs: "-130px",md:"-180px" },
            opacity: "0.5",
          }}
        >
          <Box
            component={motion.img}
            className="rotateImg"
            src={logo}
            sx={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            width: {xs:"250px",md:"350px"},
            height: "350px",
            position: "absolute",
            top: { xs: "50%", md: "50%" },
            left: { xs: "-130px" },
            opacity: "0.5",
          }}
        >
          <Box
            component={motion.img}
            className="rotateImg"
            src={logo}
            sx={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Grid2>
    </Box>
  );
}

export default MissionAndVision;
