import { useNotes } from "../../Context/NotesContext/NotesContext";
import "./priority.css";

const Priority = ({ showPriority }) => {
  const priorities = ["Low", "Medium", "High"];
  const { dispatchNote } = useNotes();
  return (
    <div className="notes-priority">
      {priorities.map((item) => {
        return (
          <label htmlFor="priority-low">
            <input
              id="priority-low"
              name="priority"
              type="radio"
              onClick={() => {
                dispatchNote({ type: "SET_PRIORITY", payload: item });
                showPriority(false);
              }}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};
export { Priority };
