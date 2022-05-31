import { Navbar } from "../../components/Navbar/Navbar";
import { Notes } from "../../components/Notes/Notes";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const NotesPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Notes />
    </div>
  );
};
