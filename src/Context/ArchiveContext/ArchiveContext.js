import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../Auth/auth-context";
import { useNotes } from "../NotesContext/NotesContext";
import {
  addToArchiveNoteService,
  deleteFromArchiveService,
  getArchiveNotesService,
  restoreArchivedNotesService,
} from "../../Services/ArchiveServices";

const ArchivesContext = createContext();
const ArchivesProvider = ({ children }) => {
  const [archiveNotes, setArchiveNotes] = useState([]);
  const { auth } = useAuth();
  const { setNotesList } = useNotes();
  useEffect(() => {
    if (auth.isLogin) {
      (async () => {
        const data = getArchiveNotesService(auth.tokenValue);
        if (data !== undefined) {
          setArchiveNotes(data.archives);
        }
      })();
    } else {
      setArchiveNotes([]);
    }
  }, [auth]);
  // ADD NOTES TO ARCHIVE
  const archiveNote = async (NoteCard) => {
    try {
      const archivedNote = await addToArchiveNoteService(
        NoteCard,
        auth.tokenValue
      );
      setArchiveNotes(archivedNote.archives);
      setNotesList(archivedNote.notes);
    } catch (error) {
      console.log(
        "error occured while setting the list after archiving the note in context",
        error
      );
    }
  };
  const restoreFromArchives = async (_id) => {
    const restoredNote = await restoreArchivedNotesService(
      _id,
      auth.tokenValue
    );
    if (restoredNote !== undefined) {
      setArchiveNotes(restoredNote.archives);
      setNotesList(restoredNote.notes);
    }
  };
  const deleteFromArchive = async (_id) => {
    const deletedNote = await deleteFromArchiveService(_id, auth.tokenValue);
    if (deletedNote != undefined) {
      setArchiveNotes(deletedNote.archives);
    }
  };
  return (
    <ArchivesContext.Provider
      value={{
        archiveNote,
        archiveNotes,
        restoreFromArchives,
        deleteFromArchive,
      }}
    >
      {children}
    </ArchivesContext.Provider>
  );
};
const useArchives = () => useContext(ArchivesContext);
export { ArchivesProvider, useArchives };
