import { useFilters } from "../../Context/FilterContext/FilterContext";
import { useNotes } from "../../Context/NotesContext/NotesContext";
import "./filters.css";
const Filter = ({ showFilters }) => {
  const priorities = ["High", "Medium", "Low"];
  const { tags } = useNotes();
  const { filterState, dispatchFilter } = useFilters();
  return (
    <div className="filter-container">
      <div>
        <div>
          <span
            className="clear-filter-btn"
            onClick={() => dispatchFilter({ type: "CLEAR_FILTER" })}
          >
            CLEAR
          </span>
          <h4>Sort by Lables</h4>
          {tags &&
            tags.map((tag) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    className="label-tag"
                    checked={filterState.filterLabels.includes(tag)}
                    onClick={() =>
                      dispatchFilter({ type: "FILTER_BY_LABEL", payload: tag })
                    }
                  />
                  {tag}
                </div>
              );
            })}
        </div>
        <div>
          <h4>Sort by Priority</h4>
          <div>
            {priorities.map((item) => {
              return (
                <label>
                  <input
                    name="priority"
                    type="radio"
                    onChange={() => {
                      dispatchFilter({
                        type: "SORT_BY_PRIORITY",
                        payload: item,
                      });
                    }}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Filter };
