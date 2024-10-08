import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { TokenContext } from "../context/Context";
import { IoMdTime } from "react-icons/io";
import {  FaStar } from "react-icons/fa";
function OurCourses() {
  let [categories, setCategories] = useState([]);
  let [currentCategory, setCurrentCategory] = useState(null);
  let [activeCategory, setActiveCategory] = useState(null);
  // let [activeInstructor, setActiveInstructor] = useState(null);

  let navigate = useNavigate();

  // let { token } = useContext(TokenContext);
  // جلب الكورسات من الـ API
  async function getCourses() {
    let res = await axios.get(`https://tradingsociety.net/api/v1/courses`, {
      headers: {
        Authorization: `Bearer 29|Ty80fgEhfB5ll2b5og6dTY5WJWqIxwPCZRD2jVNOa50891a8`,
      },
    });
    setCategories(res?.data?.courses?.data); // تخزين البيانات في حالة الاستخدام
    console.log(res?.data?.courses?.data);
    console.log(res);
  }

  useEffect(() => {
    getCourses();
  }, []);

  // جلب بيانات الكورسات بناءً على الفئة المحددة
  function getCoursesData() {
    if (currentCategory) {
      let category = categories.find(
        (c) => c.category_name === currentCategory
      );
      if (category) {
        return category.courses;
      }
    }
    return [];
  }

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "33px",
            my: "3px",
            color: "#fff",
            transform: "translateX(-40px)",
            position: "relative",
            zIndex:"99",
            "&::after": {
              content: "''",
              backgroundColor: "#ecbc56",
              position: "absolute",
              bottom: "0",
              left: "-5px",
              width: "120px",
              height: "3px",
            },
          }}
        >
          Our{" "}
          <Typography component="span" sx={{ color: "#ECBC56" }}>
            Courses
          </Typography>
        </Typography>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((categoryData, index) => {
            return (
              <Box key={index}>
                <Button
                  sx={{ textTransform: "capitalize", color: "#fff", }}
                  onClick={(e) => {
                    if (activeCategory) {
                      activeCategory.classList.remove("active_category");
                    }

                    e.currentTarget.classList.add("active_category");
                    setActiveCategory(e.currentTarget);
                    setCurrentCategory(categoryData.category_name);
                  }}
                >
                  {categoryData.category_name}
                </Button>
              </Box>
            );
          })}
        </Box>

        {/* عرض الكورسات بناءً على الفئة المحددة */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 3,
            zIndex: "999",
          }}
        >
          {getCoursesData().map((course, index) => {
            return (
              <>
                <Card
                  key={index}
                  sx={{
                    width: "250px",
                    margin: 2,
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => {
                    navigate(`/courses/${course.id}`);
                  }}
                >
                  <CardMedia
                    component="img"
                    // height="140"
                    image={course.course_photo}
                    alt={course.course_title}
                    sx={{ height: "124px" }}
                  />
                  <CardContent sx={{ color: "#fff", width: "100%" }}>
                    <Typography
                      gutterBottom
                      // variant="body1"
                      component="div"
                      sx={{
                        fontSize: "19px",
                        fontFamily: "TanseekModernProArabic-Bold",
                      }}
                    >
                      {course.course_title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "17px" }}>
                      {course.course_description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: "12px" }}>
                      Instructor: {course.course_instructor_name}
                    </Typography>

                    <Box
                      sx={{
                        color: "#ECBC56",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaStar style={{ width: "10px", height: "10px" }} />
                      <FaStar style={{ width: "10px", height: "10px" }} />
                      <FaStar style={{ width: "10px", height: "10px" }} />
                      <FaStar style={{ width: "10px", height: "10px" }} />
                      <FaStar style={{ width: "10px", height: "10px" }} />
                      <Typography sx={{ color: "gray", fontSize: "13px" }}>
                        10k
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IoMdTime style={{ color: "#ECBC56" }} />
                      <Typography sx={{ fontSize: "20px", ml: "5px" }}>
                        Duration:{" "}
                        <Typography variant="span">
                          {course.course_total_hours}
                        </Typography>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default OurCourses;
