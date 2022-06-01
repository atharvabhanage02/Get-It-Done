import axios from "axios";
const restoreArchivedNotesService = async (id, tokenValue) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${id}`,
      { note: {} },
      {
        headers: { authorization: tokenValue },
      }
    );
    return data;
  } catch (error) {
    console.log("Error occured while restoring Archived Notes API", error);
  }
};
export { restoreArchivedNotesService };
