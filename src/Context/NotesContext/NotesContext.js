import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "../Auth/auth-context";
import { initialNote, noteReducer } from "../../Reducers/noteReducer";
import { getNotes } from "../../Services/getNotes";
import { addNoteService } from "../../Services/addNote";
import { updateNotesService } from "../../Services/updateNote";
import { deleteNoteService } from "../../Services/deleteNote";
const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const { auth } = useAuth();
  const [notesList, setNotesList] = useState([]);
  const [tags, setTags] = useState(["Home"]);
  useEffect(() => {
    if (auth.isLogin) {
      (async () => {
        const { data, status } = await getNotes(auth.tokenValue);
        if (status === 201) {
          setNotesList(data.notes);
        }
      })();
    } else {
      setNotesList([]);
    }
  }, [auth]);
  const [noteState, dispatchNote] = useReducer(noteReducer, initialNote);
  const addUserNote = async (NoteCard) => {
    try {
      const {
        data: { notes: notesResponse },
      } = await addNoteService({ ...NoteCard }, auth.tokenValue);
      setNotesList(notesResponse);
    } catch (error) {
      console.log("error occured while adding new note to list");
    }
  };
  const updatePin = async (NoteCard) => {
    try {
      const {
        data: { notes: notesResponse },
      } = await updateNotesService(
        { ...NoteCard, isPin: !NoteCard.isPin },
        auth.tokenValue
      );
      setNotesList(notesResponse);
    } catch (error) {
      console.log("Error while setting list while updating the List", error);
    }
  };
  const deleteNote = async (NoteCard) => {
    try {
      const {
        data: { notes: notesResponse },
      } = await deleteNoteService(NoteCard, auth.tokenValue);
      setNotesList(notesResponse);
    } catch (error) {
      console.log("Error occured in context while deleting", error);
    }
  };
  const changeColor = (NoteCard, chosenColor) => {
    updateNotesService({ ...NoteCard, color: chosenColor });
  };
  const updateUserNote = async (NoteCard) => {
    try {
      const {
        data: { notes: notesResponse },
      } = await updateNotesService(NoteCard, auth.tokenValue);
      setNotesList(notesResponse);
    } catch (error) {
      console.log("Error occured while updating the single note", error);
    }
  };
  const notesInTrash = async (NoteCard) => {
    if (NoteCard.isPin) {
      updateUserNote({
        ...NoteCard,
        inTrash: !NoteCard.inTrash,
        isPin: NoteCard.isPin,
      });
    } else {
      updateUserNote({ ...NoteCard, inTrash: !NoteCard.inTrash });
    }
  };
  return (
    <NotesContext.Provider
      value={{
        notesList,
        setNotesList,
        addUserNote,
        updatePin,
        notesInTrash,
        deleteNote,
        updateUserNote,
        changeColor,
        noteState,
        dispatchNote,
        tags,
        setTags,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
