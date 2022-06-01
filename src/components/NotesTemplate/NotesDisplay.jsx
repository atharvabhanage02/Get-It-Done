import "./notes-display.css";
import {
  BiArchiveIn,
  BiEdit,
  BiArchiveOut,
  FaTrashRestoreAlt,
  BsPin,
  BsPinFill,
  AiOutlineDelete,
} from "../../Utils/icons";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import { useLocation } from "react-router-dom";
import { useArchives } from "../../Context/ArchiveContext/ArchiveContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyOnArchive,
  notifyOnDelete,
  notifyOnPin,
  notifyOnUnpin,
} from "../../Utils/notifications";
const NotesDisplay = ({ notesData }) => {
  const { title, description, color, priority, isPin, labels } = notesData;
  const { updatePin, dispatchNote, deleteNote, notesInTrash } = useNotes();
  const { archiveNote, archiveNotes, restoreFromArchives, deleteFromArchive } =
    useArchives();
  const { pathname } = useLocation();
  return (
    <div className={`notes-display-card ${color}`}>
      <div onClick={() => updatePin(notesData)}>
        {!isPin ? (
          <BsPin
            className="notes-card-icons pin-icon "
            onClick={() => notifyOnPin()}
          />
        ) : (
          <BsPinFill
            className="notes-card-icons pin-icon "
            onClick={() => notifyOnUnpin()}
          />
        )}
      </div>

      <div className="notes-card-content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {priority && <span className="priority-tag">{priority}</span>}
      <div className="label-tag-wrapper">
        {labels &&
          labels.map((label) => {
            return <div className="label-tag">{label}</div>;
          })}
      </div>
      <div className="notes-user-options">
        {pathname === "/notes" && (
          <BiArchiveIn
            className="notes-card-icons card-archive-icon"
            onClick={() => {
              archiveNote(notesData);
              notifyOnArchive();
            }}
          />
        )}
        {pathname === "/archive" && (
          <BiArchiveOut
            className="notes-card-icons card-archive-icon"
            onClick={() => {
              restoreFromArchives(notesData._id);
            }}
          />
        )}
        {pathname === "/notes" && (
          <AiOutlineDelete
            className="notes-card-icons card-delete-icon"
            onClick={() => {
              notesInTrash(notesData);
              notifyOnDelete();
            }}
          />
        )}
        {pathname === "/archive" && (
          <AiOutlineDelete
            className="notes-card-icons card-delete-icon"
            onClick={() => deleteFromArchive(notesData._id)}
          />
        )}
        {pathname === "/trash" && (
          <AiOutlineDelete
            className="notes-card-icons card-delete-icon"
            onClick={() => deleteNote(notesData)}
          />
        )}
        {pathname === "/trash" && (
          <FaTrashRestoreAlt
            className="notes-card-icons card-delete-icon"
            onClick={() => notesInTrash(notesData)}
          />
        )}
        {pathname === "/notes" && (
          <BiEdit
            className="notes-card-icons"
            onClick={() => {
              dispatchNote({ type: "UPDATE_NOTE", payload: notesData });
            }}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
export { NotesDisplay };
