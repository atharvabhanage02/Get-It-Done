import axios from "axios";
const addToArchiveNoteService = async (userNote, tokenValue) => {
  try {
    const { data } = await axios.post(
      `/api/notes/archives/${userNote._id}`,
      { note: { userNote } },
      {
        headers: { authorization: tokenValue },
      }
    );
    return data;
  } catch (error) {
    console.log("Error occured while calling Archive Notes API", error);
  }
};
export { addToArchiveNoteService };
