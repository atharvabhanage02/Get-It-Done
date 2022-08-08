import "./notes.css";
import { NotesCard } from "../Notes-Card/NotesCard";
import { NotesDisplay } from "../NotesTemplate/NotesDisplay";
import { PinnedNotes } from "../PinnedNotes/PinnedNotes";
import { useFilters } from "../../Context/FilterContext/FilterContext";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
export const Notes = () => {
  const { finalFilteredNotes } = useFilters();
  const unPinnedNotes = finalFilteredNotes.filter(
    (item) => !item.isPin && !item.inTrash
  );
  // const [parent] = useAutoAnimate();
  return (
    <div className="main-content">
      <NotesCard />
      <PinnedNotes />
      <div className="all-notes-display">
        <h1>All Notes</h1>
        <div className="unpinned-notes" >
          {unPinnedNotes.map((singleNote) => {
            return <NotesDisplay key={singleNote._id} notesData={singleNote} />;
          })}
        </div>
      </div>
    </div>
  );
};
