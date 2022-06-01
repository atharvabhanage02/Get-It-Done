import { Navbar } from "../../components/Navbar/Navbar";
import { NotesDisplay } from "../../components/NotesTemplate/NotesDisplay";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import "./trash.css";
export const Trash = () => {
  const { notesList } = useNotes();
  const trashNotes = notesList.filter((item) => item.inTrash);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <h1>This is Trash</h1>
        <div className="all-archived-notes">
          {trashNotes &&
            trashNotes.map((note) => {
              return <NotesDisplay notesData={note} />;
            })}
        </div>
      </div>
    </div>
  );
};
