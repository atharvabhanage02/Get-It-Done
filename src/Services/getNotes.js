import axios from "axios";
const getNotes = async (tokenValue) => {
  try {
    const { data, status } = await axios.get("/api/notes", {
      headers: {
        authorization: tokenValue,
      },
    });
    return { data, status };
  } catch (error) {
    console.log("Error occured while getting notes from API", error);
  }
};
export { getNotes };
