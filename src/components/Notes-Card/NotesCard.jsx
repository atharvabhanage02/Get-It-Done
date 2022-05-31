import "./notescard.css";
import { BiLabel, BiPalette } from "react-icons/bi";
import { MdPriorityHigh } from "react-icons/md";
import { useState } from "react";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import { ColorPallete } from "../ColorPallete/ColorPallete";
import { Priority } from "../Priority/Priority";
const NotesCard = () => {
  const [showColors, setColors] = useState(false);
  const [showPriorityOptions, setPriorityOptions] = useState(false);
  const {
    notesList,
    addUserNote,
    noteState,
    dispatchNote,
    updateUserNote,
  } = useNotes();
  const isNotePresent = notesList.some((item) => item._id === noteState._id);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isNotePresent) {
      addUserNote(noteState);
    } else {
      updateUserNote(noteState);
    }
    dispatchNote({ type: "CLEAR_INPUTS" });
  };
  return (
    <div className="notes-card-wrapper">
      <div className="notes-card" style={{ backgroundColor: noteState.color }}>
        <form action="">
          <div className="user-input-field">
            <input
              type="text"
              className="title-input"
              placeholder="Title"
              value={noteState.title}
              onChange={(e) =>
                dispatchNote({ type: "SET_TITLE", payload: e.target.value })
              }
              required
            />
            <br />
            <input
              type="text"
              className="description-input"
              placeholder="Desciption"
              value={noteState.description}
              onChange={(e) =>
                dispatchNote({
                  type: "SET_DESCRIPTION",
                  payload: e.target.value,
                })
              }
            />
          </div>
          {noteState.priority && (
            <span className="priority-tag">{noteState.priority}</span>
          )}
          <div className="label-tag-wrapper">
            {noteState.labels &&
              noteState.labels.map((label) => {
                return (
                  <div className="label-tag">
                    {label}
                    <span className="close-tag">X</span>
                  </div>
                );
              })}
          </div>
          <div className="notes-options">
            <BiLabel className="notes-card-icons" />
            <BiPalette
              className="notes-card-icons"
              onClick={() => setColors((prev) => !prev)}
            />
            <MdPriorityHigh
              onClick={() => setPriorityOptions((prev) => !prev)}
              className="notes-card-icons"
            />

            <div className="cursor-not-allowed">
              <button
                type="submit"
                className={`apex-btn apex-primary-btn add-note-btn ${
                  noteState.title === "" || noteState.description === ""
                    ? "notes-card-disable-btn"
                    : ""
                } `}
                onClick={(e) => submitHandler(e)}
              >
                {isNotePresent ? "Update" : "Add"}
              </button>
            </div>
          </div>
          {showColors && <ColorPallete setShowColorPallete={setColors} />}
        </form>
      </div>
      {showPriorityOptions && <Priority showPriority={setPriorityOptions} />}
    </div>
  );
};
export { NotesCard };
