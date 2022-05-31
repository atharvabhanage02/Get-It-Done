import { useNotes } from "../../Context/NotesContext/NotesContext";

const ColorPallete = ({ setShowColorPallete }) => {
  const colors = ["red", "blue", "green", "yellow"];
  const { dispatchNote } = useNotes();
  return (
    <div className="pallete-div">
      {colors.map((color) => {
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
