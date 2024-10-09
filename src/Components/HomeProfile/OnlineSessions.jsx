// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { DarkModeContext, TokenContext } from "../context/Context";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import mfImg from "../../home_profile_assets/mf.png";

import decoration_img from "../../home_profile_assets/decoration.png";
import { FaStar } from "react-icons/fa";
import tsImg from "../../home_profile_assets/ts.png";
function OnlineSessions() {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#191919",
        minHeight: "100vh",
        posiiton: "relative",
        display: "flex",
        justfiyContent: "center",
      }}
    >
      <Box
        sx={{
          zIndex: "999",
          position: "relative",
          display:'flex',
          gap:'20px',
          flexWrap:'wrap'

          // width: "50%",
    
        }}
      >
        <Card
          sx={{
            mt: 2,
            backgroundColor: "#2C2C2C",
            borderRadius: "8px",
            width: "272px",
            height: "417px",
            position:'relative',
          }}
        >
          <CardMedia
            component="img"
            image={mfImg}
            sx={{
              width: "100%",
              height: "271.28px",
              objectFit: "cover",
              zIndex:"999",
              position:'relative'

              // borderRadius: "8px",
            }}
          />
          <Box component="img" src={tsImg} sx={{position:"absolute",top:'0',right:'-7px'}}/>
          <CardContent
            sx={{ color: "#000", backgroundColor: "#D9D9D9", height: "100%" }}
          >
            <Typography variant="body1">Mohamed Fawzi</Typography>

            <Box sx={{ color: "#ECBC56" }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            mt: 2,
            backgroundColor: "#2C2C2C",
            borderRadius: "8px",
            width: "272px",
            height: "417px",
            position:'relative',
          }}
        >
          <CardMedia
            component="img"
            image={mfImg}
            sx={{
              width: "100%",
              height: "271.28px",
              objectFit: "cover",
              zIndex:"999",
              position:'relative'

              // borderRadius: "8px",
            }}
          />
          <Box component="img" src={tsImg} sx={{position:"absolute",top:'0',right:'-7px',}}/>
          <CardContent
            sx={{ color: "#000", backgroundColor: "#D9D9D9", height: "100%" }}
          >
            <Typography variant="body1">Mohamed Fawzi</Typography>

            <Box sx={{ color: "#ECBC56" }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            mt: 2,
            backgroundColor: "#2C2C2C",
            borderRadius: "8px",
            width: "272px",
            height: "417px",
            position:'relative',
          }}
        >
          <CardMedia
            component="img"
            image={mfImg}
            sx={{
              width: "100%",
              height: "271.28px",
              objectFit: "cover",
              zIndex:"999",
              position:'relative'

              // borderRadius: "8px",
            }}
          />
          <Box component="img" src={tsImg} sx={{position:"absolute",top:'0',right:'-7px'}}/>
          <CardContent
            sx={{ color: "#000", backgroundColor: "#D9D9D9", height: "100%" }}
          >
            <Typography variant="body1">Mohamed Fawzi</Typography>

            <Box sx={{ color: "#ECBC56" }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "0",
          bottom: "-300px",
          zIndex: "99",
        }}
      >
        <Box component="img" src={decoration_img} />
      </Box>
    </Box>
  );
}

export default OnlineSessions;
