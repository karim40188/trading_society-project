import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import bgClickedEducator from "../../home_profile_assets/bg_clicked_educator.png";
import OurCourses from "./OurCourses";
import axios from "axios";
// import { TokenContext } from "../context/Context";
import person1 from "../../home_profile_assets/person4.png";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import decorationImg from "../../home_profile_assets/decoration.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

function AcademyProfile() {
  // let [instructorCourses, setInstructorCourses] = useState([]);
  // let [categories, setCategories] = useState([]);
  // let { token } = useContext(TokenContext);

  let [instructors, setInstructors] = useState([]); // لتخزين قائمة المدربين
let [popup,setPopup]=useState(false)
  let [instructorWithId, setInstructorWithId] = useState({});
  // جلب بيانات المدربين من الـ API
  async function getAllInstructors() {
    let res = await axios.get(`https://tradingsociety.net/api/v1/instructor`, {
      headers: {
        Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
      },
    });
    setInstructors(res?.data?.instructors?.data);
    console.log(res?.data?.instructors?.data);
  }

  // let popUpRef = useRef(null);

  async function getInstructorCourses(id) {
    let res = await axios.get(
      `https://tradingsociety.net/api/v1/instructor_courses/${id}`,
      {
        headers: {
          Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
        },
      }
    );

    console.log(res?.data?.instructor_with_courses);
    setInstructorWithId(res?.data?.instructor_with_courses);
  }

  useEffect(() => {
    getInstructorCourses();
    getAllInstructors();
  }, []);
  let navigate = useNavigate();
  // عند الضغط على مدرب معين
  const handleInstructorClick = () => {
  setPopup(true) // إظهار التفاصيل
  };

  const handleVideoClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`); // navigate to full screen page
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <Box sx={{}}>
        <Typography
          sx={{
            fontSize: "33px",
            my: "30px",
            color: "#fff",
            transform: "translateX(15px)",
            position: "relative",
            "&::after": {
              content: "''",
              position: "absolute",
              backgroundColor: "#ecbc56",
              left: "0",
              top: "100%",
              width: "100%",
              height: "3px",
            },
          }}
        >
          Our{" "}
          <Typography component="span" sx={{ color: "#ECBC56" }}>
            Educators
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ ml: "60px", position: "relative", zIndex: "999" }}>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {instructors.map((educator, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "15px", // Soft rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                transition: "transform 0.3s ease", // Animation effect
                "&:hover": {
                  transform: "scale(1.05)", // Slightly enlarge on hover
                },
              }}
              onClick={() => {
                getInstructorCourses(educator.id);
                handleInstructorClick();
              }} // عند الضغط على المدرب
            >
              <Box
                sx={{
                  width: "107px",
                  height: "107px",
                  borderRadius: "50%",
                  overflow: "hidden", // To ensure image stays inside the circle
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Shadow around the image
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                  component="img"
                  src={educator.Instructor_image}
                  alt={educator.Instructor_name}
                />
              </Box>
              <Typography
                sx={{
                  //  color: "text.primary",
                  fontWeight: "bold", // Make the name stand out
                  fontSize: "1rem",
                }}
              >
                {educator.Instructor_name}
              </Typography>
            </Box>
          ))}
        </Box>

        {popup ? (
  <motion.div
    initial={{ opacity: 0, y: -100 }} // يبدأ مخفيًا ويأتي من أعلى
    whileInView={{ opacity: 1, y: 0 }} // عند الظهور
    exit={{ opacity: 0, y: 100 }} // عند الإغلاق يختفي للأسفل
    transition={{ duration: 0.5 }} // مدة الحركة
  >
    <Box
      sx={{
        width: { xs: "90%", sm: "600px", md: "770px" }, // يستجيب لحجم الشاشة
        height: "auto",
        backgroundColor: "#3F3D3D",
        position: "relative",
        mt: "50px",
        p: { xs: "20px", sm: "30px" }, // تقليل الحواف على الشاشات الأصغر
        mx: "auto", // يتمركز في المنتصف
      }}
    >
      <Box
        sx={{
          borderBottom: "50px solid #3F3D3D",
          borderLeft: "50px solid transparent",
          borderRight: "5px solid transparent",
          position: "absolute",
          top: "-50px",
          left: "0px",
        }}
      ></Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" }, // عمود في الهواتف ومسطّر في الشاشات الأكبر
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  mr: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                  component="img"
                  src={instructorWithId.Instructor_image}
                  alt={instructorWithId.Instructor_name}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", md: "22px" }, // تكبير الحجم على الشاشات الأكبر
                    fontWeight: "bold",
                  }}
                >
                  {instructorWithId.Instructor_name}
                </Typography>
                <Box sx={{ color: "#ECBC56" }}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </Box>
              </Box>
            </Box>

            <Typography
              sx={{
                width: { xs: "100%", md: "310px" },
                height: "auto",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: "22.21px",
                color: "gray",
                mt: "15px",
              }}
            >
              {instructorWithId.description}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "0px",
              fontSize: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setPopup(false);
            }}
          >
            <HiOutlineXMark />
          </Box>

          <Box sx={{ mt: { xs: "20px", md: "0" } }}>
            <Typography sx={{ lineHeight: "3px" }}>
              Meet Our Educator <br />
              <Typography component="span" sx={{ color: "#ECBC56" }}>
                {instructorWithId.Instructor_name}
              </Typography>
            </Typography>

            <Box
              sx={{
                width: { xs: "100%", md: "300px" }, // عرض كامل في الشاشات الصغيرة
                height: "202px",
                mt: { xs: "10px", md: "0" }, // مسافة من الأعلى في الشاشات الصغيرة
              }}
            >
              <Box
                component="img"
                src={instructorWithId.Instructor_image}
                alt={instructorWithId.Instructor_name}
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>

        {instructorWithId.courses && instructorWithId.courses.length > 0 && (
          <Typography
            sx={{
              color: "#ecbc56",
              position: "relative",
              "&::after": {
                content: "''",
                position: "absolute",
                backgroundColor: "#ecbc56",
                left: "80px",
                top: "20px",
                width: "120px",
                height: "10px",
              },
            }}
          >
            {instructorWithId?.courses[0].category_name}
          </Typography>
        )}

        {/* عرض الفيديوهات بناءً على المستوى */}
        {instructorWithId.courses && instructorWithId.courses.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              mt: "20px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {instructorWithId?.courses[0]?.course_vedios.map(
              (video, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexBasis: { xs: "100%", sm: "48%", md: "calc(33.33% - 20px)" }, // عرض متجاوب
                    marginBottom: "20px", // مسافة بين الصفوف
                  }}
                  onClick={() => handleVideoClick(video?.video_url)}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "189px",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="img"
                      src={person1}
                      alt={`Video thumbnail for ${video.course_name}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        width: "62px",
                        height: "54px",
                        backgroundColor: "#FFFBFB82",
                        top: "30%",
                        left: "50%",
                        position: "absolute",
                        transform: "translateX(-50%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        color: "#ecbc56",
                      }}
                    >
                      <FaPlay />
                    </Box>
                  </Box>
                  <Box sx={{ mt: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "22px" },
                        fontWeight: "bold",
                      }}
                    >
                      {video.course_name}
                    </Typography>
                    <Typography
                      sx={{ color: "gray", fontSize: { xs: "14px", md: "16px" } }}
                    >
                      {instructorWithId.Instructor_name}
                    </Typography>
                    <Box
                      sx={{
                        color: "#ECBC56",
                        display: "flex",
                        alignItems: "center",
                        mt: "5px",
                      }}
                    >
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            style={{ width: "15px", height: "15px" }}
                          />
                        ))}
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "14px",
                          ml: "5px",
                        }}
                      >
                        10k
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: "5px",
                      }}
                    >
                      <IoMdTime
                        style={{ color: "#ECBC56", fontSize: "18px" }}
                      />
                      <Typography
                        sx={{ fontSize: "14px", ml: "5px" }}
                      >
                        Duration:{" "}
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          {video.vedio_time}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </Box>
        )}
      </Box>
    </Box>
  </motion.div>
) : (
  ""
)}

      

        {/* تفاصيل المدرب المختار */}
        <Box sx={{}}></Box>

        {/* جزء الـ Our Courses */}
        <OurCourses />
      </Box>

      <Box
        sx={{
          position: "absolute",
          // transform: "translateY(-300px)",
          right: "0",
          transform: "translateY(-400px)",
          width: "10%",
          zIndex: "1",
        }}
      >
        <Box component="img" src={decorationImg} sx={{ width: "100%" }} />
      </Box>
    </Box>
  );
}

export default AcademyProfile;
