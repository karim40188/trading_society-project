import { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const daysInMonth = currentMonth.daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, index) =>
    dayjs(currentMonth).date(index + 1)
  );

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const previousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setOpenDialog(true);
  };

  const handleAddEvent = () => {
    if (eventTitle.trim()) {
      setEvents({ ...events, [selectedDate.format("YYYY-MM-DD")]: eventTitle });
    }
    setOpenDialog(false);
    setEventTitle("");
  };

  const totalRows = Math.ceil(
    (daysInMonth + currentMonth.startOf("month").day()) / 7
  );

  return (
    <Box sx={{ padding: { xs: "5px", md: "20px" }, color: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "5px",
          fontSize: "14px",
          fontFamily: "SF Pro Display",
          mb: 2,
        }}
      >
        <Button
          sx={{
            width: "100%",
            maxWidth: "106px",
            height: "36px",
            background: "linear-gradient(90deg, #C3AD57 0%, #5D5329 100%)",
            color: "#fff",
            textTransform: "capitalize",
            borderRadius: "5px",
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Calendar
        </Button>
        <Button
          sx={{
            width: "100%",
            maxWidth: "106px",
            height: "36px",
            color: "#fff",
            fontSize: { xs: "12px", md: "14px" },
            textTransform: "capitalize",
            backgroundColor: "#000",
            borderRadius: "5px",
          }}
        >
          Live Meeting
        </Button>
        <Button
          sx={{
            width: "100%",
            maxWidth: "140px",
            height: "36px",
            color: "#fff",
            fontSize: { xs: "12px", md: "14px" },
            textTransform: "capitalize",
            backgroundColor: "#000",
            borderRadius: "5px",
          }}
        >
          Recorded Meeting
        </Button>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            gap: { xs: "10px", md: "30px" },
          }}
        >
          <IoMdArrowDropleft
            onClick={previousMonth}
            style={{
              color: "#856A30",
              width: "33px",
              height: "47px",
              fontSize: "30px",
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                margin: "0 10px",
                color: "#C3AD57",
                width: { xs: "150px", md: "250px" },
                maxHeight: "80px",
                fontFamily: "Motken noqta ii",
                fontSize: { xs: "18px", md: "25px" },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  width: "100%",
                  height: "10px",
                  left: "0",
                  background:
                    "linear-gradient(90deg, #191919 57.89%, #856A30 100%)",
                },
              }}
            >
              {currentMonth.format("MMMM")}{" "}
              <Typography
                component="span"
                sx={{ color: "#fff", fontFamily: "Motken noqta ii" }}
              >
                {currentMonth.format("YYYY")}
              </Typography>
            </Typography>
          </Box>

          <IoMdArrowDropright
            onClick={nextMonth}
            style={{ color: "#856A30", width: "33px", height: "47px" }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map(
            (day, index) => (
              <Box
                key={day}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: index < 6 ? "1px solid #856A30" : "none", // Border right for all except last column
                  borderBottom: "1px solid #856A30",
                  height: { xs: "60px", md: "100px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#C3AD57",
                    fontFamily: "Motken noqta ii",
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {day}
                </Typography>
              </Box>
            )
          )}

          {/* Empty spaces at the start */}
          {Array.from({ length: currentMonth.startOf("month").day() }).map(
            (_, index) => (
              <Box
                key={index}
                sx={{
                  borderRight: "1px solid #856A30",
                  borderBottom: "1px solid #856A30",
                  height: { xs: "60px", md: "100px" },
                }}
              ></Box>
            )
          )}

          {/* Display days */}
          {daysArray.map((day, index) => (
            <Box
              key={day.format("DD")}
              sx={{
                borderRight: (index + currentMonth.startOf("month").day() + 1) % 7 === 0 ? "none" : "1px solid #856A30", // Remove border-right for the last day in the row
                borderBottom: index >= (totalRows - 1) * 7 ? "none" : "1px solid #856A30", // Remove border-bottom for the last row
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                width: "100%",
                height: { xs: "60px", md: "100px" },
                transition: "background-color 0.3s",
                backgroundColor: events[day.format("YYYY-MM-DD")]
                  ? "#ffcccc"
                  : "inherit",
                "&:hover": { backgroundColor: "#C3AD57", color: "#000" },
              }}
              onClick={() => handleDateClick(day)}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Clarendon",
                  fontSize: { xs: "16px", md: "30px" },
                }}
              >
                {day.date()}
              </Typography>
              {events[day.format("YYYY-MM-DD")] && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "red",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  !
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddEvent}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
