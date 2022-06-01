import axios from "axios";
const getArchiveNotesService = async (tokenValue) => {
  try {
    const { data } = await axios.get("/api/archives", {
      headers: { authorization: tokenValue },
    });
    return data;
  } catch (error) {
    console.log("Error occured while getting all Archived Notes", error);
  }
};
export { getArchiveNotesService };
