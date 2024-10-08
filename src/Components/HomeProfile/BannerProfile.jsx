import { Box } from '@mui/material'
import profileBanner from "../../home_profile_assets/profile_banner.png";

function BannerProfile() {
  return (
    <Box sx={{ width: "auto", height: "260px" }}>
    <Box
      component="img"
      src={profileBanner}
      sx={{ backgroundImage: "cover", width: "100%" }}
    />
  </Box>
  )
}

export default BannerProfile