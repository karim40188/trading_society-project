import axios from "axios";
import { useEffect } from "react";

function Test() {
  //   let BASE_URL = `https://tradingsociety.net/api/v1`;
  const fetchAllInstructors = async () => {
    try {
      const response = await axios.get(
        `https://tradingsociety.net/api/v1/instructor`,
        {
          headers: {
            Authorization:
              "Bearer 7|ZbhS55oqdrDAk98VqWFBLZgdUOPPtiMkvsqg6SNMf3771c27",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching instructors:", error);
      throw error;
    }
  };




  useEffect(() => {
    fetchAllInstructors();
  }, []);
  return <div>Test</div>;
}

export default Test;
