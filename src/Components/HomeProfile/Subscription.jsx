import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../home_profile_assets/card1.png";
import card2 from "../../home_profile_assets/card2.png";
import card3 from "../../home_profile_assets/card3.png";
import { Autoplay } from "swiper/modules";

function Subscription() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
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
      {/* Essential */}
      <SwiperSlide>
        <Box sx={{ width: "320px", height: "500px", backgroundImage: `url(${card1})`, backgroundRepeat: "no-repeat", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", px: "15px", py: "30px", color: "#fff" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Essential.
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", lineHeight: "1" }}>
            Live trading<br />
            Trade alert<br />
            Beginner & basic course
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>25 CV.</Typography>
            <Typography sx={{ fontSize: "18px" }}> Price 99$</Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontStyle: "italic" }}>Monthly subscription</Typography>
        </Box>
      </SwiperSlide>

      {/* Basic */}
      <SwiperSlide>
        <Box sx={{ width: "320px", height: "500px", backgroundImage: `url(${card1})`, backgroundRepeat: "no-repeat", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", px: "15px", py: "30px", color: "#fff" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Basic
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", lineHeight: "1" }}>
            Live sessions<br />
            Trade alert<br />
            Beginner & basic course<br />
            Advance course
          </Typography>
          <Typography sx={{ mt: "3px" }}>Affiliate program</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>100 CV.</Typography>
            <Typography sx={{ fontSize: "18px" }}>Price 399$</Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontStyle: "italic" }}>Annually subscription</Typography>
        </Box>
      </SwiperSlide>

      {/* Premium */}
      <SwiperSlide>
        <Box sx={{ width: "320px", height: "500px", backgroundImage: `url(${card2})`, backgroundRepeat: "no-repeat", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", px: "15px", py: "30px", color: "#fff" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Premium
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", lineHeight: "1" }}>
            Live trading<br />
            Live sessions<br />
            Trade alert<br />
            Beginner & basic course<br />
            Advance course<br />
            One scammer
          </Typography>
          <Typography sx={{ mt: "3px" }}>Affiliate program</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>200 CV.</Typography>
            <Typography sx={{ fontSize: "18px" }}>Price 749$</Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontStyle: "italic" }}>Annually subscription</Typography>
        </Box>
      </SwiperSlide>

      {/* Pro */}
      <SwiperSlide>
        <Box sx={{ width: "320px", height: "500px", backgroundImage: `url(${card2})`, backgroundRepeat: "no-repeat", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", px: "15px", py: "30px", color: "#fff" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            PRO
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", lineHeight: "1" }}>
            Live trading<br />
            Live sessions<br />
            Trade alert<br />
            Beginner & basic course<br />
            Advance course<br />
            All scanner<br />
            4 private sessions with selected coach
          </Typography>
          <Typography sx={{ mt: "3px" }}>
            Affiliate program with extra<br />
            Bonus
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>500 CV.</Typography>
            <Typography sx={{ fontSize: "18px" }}> Price 1499$</Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontStyle: "italic" }}>Annually subscription</Typography>
        </Box>
      </SwiperSlide>

      {/* Ultimate */}
      <SwiperSlide>
        <Box sx={{ width: "320px", height: "500px", backgroundImage: `url(${card3})`, backgroundRepeat: "no-repeat", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", px: "15px", py: "30px", color: "#fff" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Ultimate
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", lineHeight: "1" }}>
            Live trading<br />
            Live sessions<br />
            Trade alert<br />
            Beginner & basic course<br />
            Advance course<br />
            All scanner<br />
            8 private sessions with selected coach<br />
            expert course<br />
            Expert plus course
          </Typography>
          <Typography sx={{ mt: "3px" }}>
            Affiliate program with extra<br />
            Bonus
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>600 CV.</Typography>
            <Typography sx={{ fontSize: "18px" }}>Price 1999$</Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontStyle: "italic" }}>Annually subscription</Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}

export default Subscription;
