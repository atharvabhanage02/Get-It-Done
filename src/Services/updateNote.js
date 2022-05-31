import axios from "axios";
const updateNotesService = async (userNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/notes/${userNote._id}`,
      { note: { ...userNote } },
      { headers: { authorization: tokenValue } }
    );
    return response;
  } catch (error) {
    console.log("Error occured in updated note API", error);
  }
};
export { updateNotesService };
