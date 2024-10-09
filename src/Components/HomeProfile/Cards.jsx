import { Box, Divider, Grid2, Typography } from "@mui/material";
import imgBg from "../../home_profile_assets/img_bg.png";
import { useContext, useState } from "react";
import googlePlay from "../../home_profile_assets/googleplay.png";
import appstore from "../../home_profile_assets/appstore.png";
import { TokenContext } from "../context/Context";

function Cards() {
  const [userInfo] = useState([
    { label: "Name", value: "Amr Omar" },
    { label: "E-mail", value: "AmrOmar@gmial.com" },
    { label: "Subscription", value: "Elite" },
    { label: "Phone Number", value: "0123456789" },
    { label: "Start Date", value: "25/10/2024" },
  ]);

  let { sidebarOpen } = useContext(TokenContext);
  const [cards] = useState([
    {
      level: "Elite",
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
    <Grid2
      container
      spacing={2}
      sx={{
        position: "relative",
        display: "hidden",
        justifyContent: {
          xs: "center",
          md: "space-between",
          gap: "10px",
        },
        alignItems: "flex-start", // Change to flex-start
      }}
    >
      {/* الكارت الأول */}
      <Grid2
        sx={{
          position: "relative",
          width: {xs:'80%',md:"300px"},
          height: "330px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          // backgroundColor: 'red',
          mx: 'auto',
          boxShadow: 2, // Add some shadow for depth
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${imgBg})`,
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
      {/* Glass effect overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
          backdropFilter: 'blur(2px)', // Glass blur effect
          WebkitBackdropFilter: 'blur(10px)', // Safari support
          zIndex: 1,
        }}
      >
            <Box
        
         
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontFamily: "TanseekModernProArabic-ExBold",
          color: "#000",
          listStyleType: "none",
          mt: 3,
          position: "absolute",
          top: "0",
          ml: "15px",
        }}
      >
        {userInfo.map((user) => (
          <Box  key={user.label}>
            <Typography
              sx={{
                fontFamily: "TanseekModernProArabic-ExBold",
                fontSize: "30px",
                fontWeight: "900",
              }}
              component="h4"
            >
              {user.label}
              <Typography
                component="span"
                sx={{
                  ml: "20px",
                  fontWeight: "400",
                  color: "#ffffff",
                  fontSize: "30px",
                }}
              >
                {user.value}
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>
      </Grid2>

      {/* الكارت الثاني */}
      <Grid2
  sx={{
    backgroundColor: "#3F3D3D",
    borderRadius: "10px",
    padding: "5px",
    mx: 'auto',
    width:{xs:'80%',md: '240px'},
    height: "330px",
    boxShadow: 2,
  }}
>
  <Typography
    sx={{
      mt: "15px",
      color: "#fff",
      textAlign: 'left',
      fontFamily: "TanseekModernProArabic-ExBold",
      fontSize: "25px",
      fontWeight: "900",
      lineHeight: "30px",
      ml: "15px",
    }}
  >
    Download Our App
  </Typography>
  <Box sx={{ mt: "50px", textAlign: 'center' }}>
    <Box component="img" src={googlePlay} 
    sx={{ 
      width: "230px", 
      mb: 2 ,
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Animation on hover
      '&:hover': {
       transform: 'scale(1.1)', // Slightly enlarges the element
       boxShadow: 0, // Increases shadow depth on hover
   },
      }} />
    <Divider
      sx={{
        backgroundColor: "#ECBC56",
        width: "204.04px",
        height: "0.7px",
        margin: "12px auto",
      }}
    />
    <Box component="img" src={appstore} 
    sx={{
       width: "230px", 
       mt: 2,
       cursor: 'pointer',
       transition: 'transform 0.3s ease-in-out, drop-shadow 0.3s ease-in-out', // Animation on hover
        '&:hover': {
        transform: 'scale(1.1)', // Slightly enlarges the element
        boxShadow: 0, // Increases shadow depth on hover
    },
     }} />
  </Box>
</Grid2>

      {/* الكارت الثالث */}
      <Grid2
        sx={{
          background: "linear-gradient(34.82deg, #000000 48.98%, #665B2E 89.31%, #C3AD57 104.99%)",
          borderRadius: "15px",
          width: {xs:'80%',md:'450px'} ,
          height: "330px",
          mx: 'auto',
          p: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 2,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "20px", md: "24px" }, color: "#FFFFFF", lineHeight: '20px' }}
        >
          {cards[0].level}
        </Typography>

        <Typography
          sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#FFFFFF" }}
        >
          Course Content
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            mt: "3px",
            px: "10px",
          }}
        >
          {cards[0].content.map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                fontFamily: "TanseekModernProArabic-ExBold",
                listStyleType: "disc",
                fontSize: { xs: "14px", md: "17px" },
                color: "#FFFFFF",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        <Typography
          sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#FFFFFF", lineHeight: '50%' }}
        >
          Prerequisites
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            mt: "3px",
            px: "10px",
          }}
        >
          {cards[0].Prerequisites.map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                fontFamily: "TanseekModernProArabic-ExBold",
                listStyleType: "disc",
                fontSize: { xs: "14px", md: "17px" },
                color: "#FFFFFF",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default Cards;
