import { Box, Typography } from "@mui/material";
import BannerProfile from "./BannerProfile";
import { useState } from "react";
import newsImg from "../../home_profile_assets/news_img.png";

function News() {
  let [news] = useState([
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
    {
      img: newsImg,
      title: "Future of AI",
      description: "The standard Lorem Ipsum passage, used since the 1500s",
    },
  ]);
  return (
    <Box sx={{ minHeight: "100vh" , color:"#000"}}>
      <BannerProfile />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt:'50px' }}>
        {news.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "206px",
                height: "293px",
                borderRadius: "15px",
                backgroundColor: "#D9D9D9",
              }}
            >
              <Box component="img" src={item.img} />
              <Box
                sx={{
                  p: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    letterSpacing: "-0.17px",
                    lineHeight: "18px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontFamily: "SF Pro Display" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default News;
