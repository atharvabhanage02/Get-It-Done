import axios from "axios";
const addNoteService = async (userNote, tokenVal) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note: { ...userNote } },
      {
        headers: {
          authorization: tokenVal,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error occured while adding new Note", error);
  }
};
export { addNoteService };
