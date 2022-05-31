const initialNote = {
  title: "",
  description: "",
  color: "",
  priority: "",
  labels: [],
  isPin: false,
  inTrash: false,
};
const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_PRIORITY":
      console.log("Code reached reducer of Priority");
      return { ...state, priority: action.payload };
    case "SET_PIN_STATE":
    case "UPDATE_NOTE":
      return { ...action.payload };
    case "ADD_LABEL":
      return {
        ...state,
        labels: state.labels.includes(action.payload)
          ? [...state.labels]
          : [...state.labels, action.payload],
      };
    case "DELETE_LABEL":
      return {
        ...state,
        labels: [...state.labels.filter((note) => note !== action.payload)],
      };
    case "CLEAR_INPUTS":
      return { ...initialNote };
    default:
      return state;
  }
};
export { initialNote, noteReducer };
