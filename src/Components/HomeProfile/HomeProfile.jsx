import { Box } from "@mui/material";
import Cards from "./Cards";
import Progress from "./Progress";
import BannerProfile from "./BannerProfile";

function HomeProfile() {
  return (
    <Box sx={{p:'20px',
      width: "90%",
      margin: "auto",
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",

    }}>
       <BannerProfile />
       <Box sx={{marginTop:{xs:"80px",md:'100px',xl:"30px",},}}>
      <Cards  />

       </Box> 
      <Box sx={{ mt: "30px" }}>
        <Progress />
      </Box>
    </Box>
  );
}

export default HomeProfile;
