import axios from "axios";
const deleteFromArchiveService = async (id, tokenValue) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${id}`, {
      headers: { authorization: tokenValue },
    });
    return data;
  } catch (error) {
    console.log("Error while calling Delete from Archives API", error);
  }
};
export { deleteFromArchiveService };
