import "./notes.css";
import { NotesCard } from "../Notes-Card/NotesCard";
import { NotesDisplay } from "../NotesTemplate/NotesDisplay";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import { PinnedNotes } from "../PinnedNotes/PinnedNotes";
export const Notes = () => {
  const { notesList } = useNotes();
  const unPinnedNotes = notesList.filter(
    (item) => !item.isPin && !item.inTrash
  );
  return (
    <div className="main-content">
      <NotesCard />
      <PinnedNotes />
      <div className="all-notes-display">
        <h1>All Notes</h1>
        <div className="unpinned-notes">
          {unPinnedNotes.map((singleNote) => {
            return <NotesDisplay key={singleNote._id} notesData={singleNote} />;
          })}
        </div>
      </div>
    </div>
  );
};
