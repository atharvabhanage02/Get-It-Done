import axios from "axios";
const deleteNoteService = async (userNote, tokenValue) => {
  try {
    const response = await axios.delete(`/api/notes/${userNote._id}`, {
      headers: { authorization: tokenValue },
    });
    return response;
  } catch (error) {
    console.log("Error occured while calling delete API", error);
  }
};
export { deleteNoteService };
