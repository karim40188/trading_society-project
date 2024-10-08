import { Box, Typography } from "@mui/material";
import person1 from "../../assets/person1.png";
import signature from "../../assets/signature.png";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CeoMF() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      setOffsetY(sectionTop * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* CEO Section */}
      <Box
        ref={sectionRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { md:'20px',xl: "100px" },
          p: { xs: 2, lg: 0 },
          overflow: "hidden",
          mt: "100px",
        }}
      >
        <Box sx={{ position: "relative", mb: { xs: 2, lg: 0 } }}>
          <Box
            sx={{
              width: { xs: "344px", lg: "605px", xl: "800px" },
              height: { xs: "400px", md: "623px", lg: "623px", xl: "900px" },

            }}
          >
            <motion.div
              style={{
                backgroundImage: `url(${person1})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                overflow: "hidden",
                backgroundSize: "contain",
              }}
              initial={{ y: 0 }}
              animate={{ y: `${offsetY - 20}px` }} 
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "650px", xl: "900px" },
            textAlign: { xs: "left", lg: "left" },
          }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              bounce: 50,
              delay: 0.5,
            }}
          >
            <Typography
              component="h3"
              variant="body2"
              sx={{
                fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "45px" },
                lineHeight: "1.2",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "text.primary",
                mb: "20px",
              }}
            >
              CEO Message <br /> for Trading <br /> Society
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "25px" },
                fontFamily: "SF Pro Display",
                fontWeight: "400",
                letterSpacing: "2%",
                lineHeight: "1.5",
                color: "text.secondary",
                mb: "20px",
              }}
            >
              <Typography>
                Hello Trading Society Family,
                <br /> I’m excited to welcome you to the Trading Society, where
                education meets community. We started this company with a simple
                goal: to make learning Forex trading accessible and to build a
                healthy, supportive space for traders of all levels.
              </Typography>
              <Typography>
                Our mission is to empower you with the knowledge and tools to
                succeed in the Forex market. Whether you’re a beginner just
                starting or a seasoned trader looking to sharpen your skills,
                we’re here to guide you every step of the way. Our courses are
                designed to be clear, straightforward, and easy to understand,
                so you can focus on what matters most—your growth and success.
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                But we’re more than just an educational platform. At the heart
                of Trading Society is a strong community where traders connect,
                learn, and grow together. We believe in the power of
                collaboration and sharing experiences. When we support each
                other, we all win. Thank you for being a part of our journey.
                Let’s learn, grow, and succeed together! Wishing you all the
                best in your trading journey,
              </Typography>
              <Box
                sx={{
                  width: { xs: "120px", lg: "248px" },
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  mt: "20px",
                  mr: "auto",
                }}
              >
                <Box
                  sx={{
                    position: "relative",

                    "&::after": {
                      content: '""',
                      width: { xs: "148px", lg: "301px" },

                      border: "0.6px solid #ECBC56",
                      position: "absolute",
                      bottom: { xs: "10px", lg: "20px" },
                      left: { xs: "-10px", lg: "-20px" },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={signature}
                    className="filter"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      position: "relative",
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                CEO, Trading Society
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* COO Section */}
    </>
  );
}

export default CeoMF;
