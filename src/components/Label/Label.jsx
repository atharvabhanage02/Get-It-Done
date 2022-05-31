import { useState } from "react";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import "./label.css";
const Label = ({ showlabels }) => {
  const [inputLabel, setInput] = useState("");
  const { dispatchNote, noteState, tags, setTags } = useNotes();
  const addLabelhandler = () => {
    if (inputLabel.trim() !== "") {
      setTags((prevLabels) =>
        prevLabels.includes(inputLabel)
          ? [...prevLabels]
          : [...prevLabels, inputLabel]
      );
      dispatchNote({ type: "ADD_LABEL", payload: inputLabel });
      setInput("");
    }
  };
  return (
    <div className="label-container">
      <span
        className="close-label-option close-tag"
        onClick={() => showlabels(false)}
      >
        X
      </span>
      <input
        type="text"
        className="label-input"
        placeholder="Enter Label"
        value={inputLabel}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-label-btn" onClick={() => addLabelhandler()}>
        Add label
      </button>
      <div className="label-tag-wrapper">
        {tags &&
          tags.map((tag) => {
            return (
              <div>
                <input
                  type="checkbox"
                  checked={noteState.labels.includes(tag)}
                  value={tag}
                  id={tag}
                  className="label-tag"
                  onChange={(e) => {
                    e.target.checked
                      ? dispatchNote({
                          type: "ADD_LABEL",
                          payload: tag,
                        })
                      : dispatchNote({
                          type: "DELETE_LABEL",
                          payload: tag,
                        });
                  }}
                />
                {tag}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export { Label };
