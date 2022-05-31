import "./notes.css";
import { NotesCard } from "../Notes-Card/NotesCard";
import { AiOutlinePlus } from "react-icons/ai";
import { NotesDisplay } from "../NotesTemplate/NotesDisplay";
import { useNotes } from "../../Context/NotesContext/NotesContext";

export const Notes = () => {
  const { notesList } = useNotes();
  return (
    <div className="main-content">
      <NotesCard />
      <div className="all-notes-display">
        <h1>All Notes</h1>
        <div className="unpinned-notes">
          {notesList.map((singleNote) => {
            return <NotesDisplay key={singleNote._id} notesData={singleNote} />;
          })}
        </div>
      </div>
      <AiOutlinePlus className="add-note-icon" />
    </div>
  );
};
