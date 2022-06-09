import { createContext, useContext, useReducer } from "react";
import {
  filterReducer,
  initialFilterState,
} from "../../Reducers/filterReducer";
import { useNotes } from "../NotesContext/NotesContext";
import {
  Compose,
  filterByLabel,
  sortByPriority,
} from "../../Utils/filterUtils";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const { notesList } = useNotes();
  const [filterState, dispatchFilter] = useReducer(
    filterReducer,
    initialFilterState
  );

  const finalFilteredNotes = Compose(
    filterState,
    sortByPriority,
    filterByLabel
  )(notesList);
  return (
    <FilterContext.Provider
      value={{ filterState, dispatchFilter, finalFilteredNotes }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilters = () => useContext(FilterContext);
export { FilterProvider, useFilters };
