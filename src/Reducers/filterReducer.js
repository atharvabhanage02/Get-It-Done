const initialFilterState = {
  filterLabels: [],
  filterPriority: "",
};
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRIORITY":
      return { ...state, filterPriority: action.payload };
    case "FILTER_BY_LABEL":
      return {
        ...state,
        filterLabels: state.filterLabels.includes(action.payload)
          ? state.filterLabels.filter((label) => label !== action.payload)
          : [...state.filterLabels, action.payload],
      };
    case "CLEAR_FILTER":
      return initialFilterState;
    default:
      return state;
  }
};

export { initialFilterState, filterReducer };
