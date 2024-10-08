import { Box } from "@mui/material";
import Cards from "./Cards";
import Progress from "./Progress";
import BannerProfile from "./BannerProfile";

function HomeProfile() {
  return (
    <Box sx={{

      display: "flex",
      // justifyContent: "start",
      // alignItems: "start",
      flexDirection: "column",

    }}>
       <BannerProfile />
       <Box sx={{marginTop:{xs:'10%',xl:'15%'}}}>
      <Cards  />

       </Box> 
      <Box sx={{ mt: "30px" }}>
        <Progress />
      </Box>
    </Box>
  );
}

export default HomeProfile;
