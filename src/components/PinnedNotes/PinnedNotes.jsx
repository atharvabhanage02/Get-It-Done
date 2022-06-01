import { useNotes } from "../../Context/NotesContext/NotesContext";
import { NotesDisplay } from "../NotesTemplate/NotesDisplay";
import "./pinned-notes.css";

const PinnedNotes = () => {
  const { notesList } = useNotes();
  const pinnedNotes = notesList
    ? notesList.filter((note) => note.isPin === true)
    : [];
  if (pinnedNotes.length !== 0) {
    return (
      <div className="pinned-notes-section">
        <h1>Pinned Notes</h1>
        <div className="pinned-notes">
          {pinnedNotes.map((note) => {
            return <NotesDisplay key={note._id} notesData={note} />;
          })}
        </div>
      </div>
    );
  }
};
export { PinnedNotes };
