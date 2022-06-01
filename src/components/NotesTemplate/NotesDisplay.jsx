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
const NotesDisplay = ({ notesData }) => {
  const { title, description, color, priority, isPin, labels } = notesData;
  const { updatePin, dispatchNote, deleteNote } = useNotes();
  const { pathname } = useLocation();
  console.log("Pathname is", pathname);
  return (
    <div className={`notes-display-card ${color}`}>
      <div onClick={() => updatePin(notesData)}>
        {!isPin ? (
          <BsPin className="notes-card-icons pin-icon " />
        ) : (
          <BsPinFill className="notes-card-icons pin-icon " />
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
          <BiArchiveIn className="notes-card-icons card-archive-icon" />
        )}
        {pathname === "/notes" && (
          <AiOutlineDelete className="notes-card-icons card-delete-icon" />
        )}
        {pathname === "/notes" && (
          <BiEdit
            className="notes-card-icons"
            onClick={() =>
              dispatchNote({ type: "UPDATE_NOTE", payload: notesData })
            }
          />
        )}
      </div>
    </div>
  );
};
export { NotesDisplay };
