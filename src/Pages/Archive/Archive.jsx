import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "../Trash/trash.css";
import "./archive.css";
import { useArchives } from "../../Context/ArchiveContext/ArchiveContext";
import { NotesDisplay } from "../../components/NotesTemplate/NotesDisplay";
export const Archive = () => {
  const { archiveNotes } = useArchives();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="all-archived-notes">
        {archiveNotes &&
          archiveNotes.map((note) => {
            return <NotesDisplay notesData={note} />;
          })}
      </div>
    </div>
  );
};
