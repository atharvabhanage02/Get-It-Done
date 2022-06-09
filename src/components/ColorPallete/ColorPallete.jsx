import { useNotes } from "../../Context/NotesContext/NotesContext";
import "./colors.css";
const ColorPallete = ({ setShowColorPallete }) => {
  const colors = ["red", "blue", "green", "yellow"];
  const newColors = [
    "color-1",
    "color-2",
    "color-3",
    "color-4",
    "color-5",
    "color-6",
    "color-7",
  ];
  const { dispatchNote } = useNotes();
  return (
    <div className="pallete-div">
      {newColors.map((color) => {
        return (
          <div
            className={`color-select ${color}`}
            onClick={() => {
              dispatchNote({ type: "SET_COLOR", payload: color });
              setShowColorPallete(false);
            }}
          ></div>
        );
      })}
    </div>
  );
};
export { ColorPallete };
