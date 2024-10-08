import { Box, Typography } from "@mui/material";
import profile_img from "../../home_profile_assets/profile_img.png";
import checkIcon from "../../home_profile_assets/vector_2.png";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Reusable component for displaying trader's pair information
// eslint-disable-next-line react/prop-types
function TraderPairInfo({ pair }) {
  return (
    <Box
      sx={{
        width: "193.12px",
        height: "29.83px",
        backgroundColor: "#000",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontSize: "12px", color: "#C3AD57", ml: "4px" }}
      >
        Pair: {pair}
      </Typography>
    </Box>
  );
}

// Main component for the trade alert profile
function TradeAlertProfile() {
  let navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  let { baseUrl } = useContext(DarkModeContext);
  // let { token } = useContext(TokenContext);

  // Fetch data from the API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function tradeAlert() {
    let res = await axios.get(`${baseUrl}/offers`, {
      headers: {
        Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
      },
    });
    setOffers(res?.data?.all_offers?.data);
  }

  useEffect(() => {
    tradeAlert();
  }, [tradeAlert]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {offers.map((offer, index) => (
        <Box
          key={index}
          sx={{
            width: "434px",
            height: "auto",
            backgroundColor: "#262626",
            borderRadius: "15px",
            pt: "30px",
            pb: "15px",
            px: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/offers/${offer.id}`);
          }}
        >
          {/* Trader profile section */}
          <Box sx={{ width: "458px", mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "10px",
              }}
            >
              {/* Profile image */}
              <Box
                sx={{ width: "47px", height: "47px" }}
                component="img"
                src={profile_img}
              />
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "56px",
                    border: "1px solid #ECBC56",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }}
              >
                {/* Trader name */}
                <Typography
                  variant="body2"
                  sx={{ color: "#C3AD57", fontSize: "14px" }}
                >
                  {offer.instructor_name}
                </Typography>
              </Box>
            </Box>

            {/* Order status section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="body2"
                sx={{ color: "#C3AD57", fontSize: "10px" }}
              >
                Order Status: {offer.order_status}
              </Typography>
              <Box component="img" src={checkIcon} />
              <Typography sx={{ fontSize: "10px" }}>3 Mins Ago</Typography>
            </Box>

            {/* Pair info section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "10px",
              }}
            >
              {/* Two columns for pairs */}
              <Box sx={{ display: "flex", gap: "60px" }}>
                {/* Left column */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  {/* يمكنك إضافة المزيد من TraderPairInfo بناءً على البيانات */}
                </Box>
                {/* Right column */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />

                  {/* يمكن تكرار الـ pairs في الأعمدة هنا */}
                </Box>
              </Box>

              {/* Trade description */}
              <Box
                sx={{
                  backgroundColor: "#000",
                  width: "449.73px",
                  height: "75.71px",
                  display: "flex",
                  alignItems: "center",
                  color: "#C3AD57",
                  fontSize: "12px",
                }}
              >
                <Box sx={{ width: "90%", mx: "auto" }}>
                  {offer.offer_description}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TradeAlertProfile;
