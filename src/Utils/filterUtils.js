const sortByPriority = (state, data) => {
  switch (state.filterPriority) {
    case "High":
      return [...data].filter((note) => note.priority === "High");
    case "Medium":
      return [...data].filter((note) => note.priority === "Medium");
    case "Low":
      return [...data].filter((note) => note.priority === "Low");
    default:
      return [...data];
  }
};
const filterByLabel = (state, data) => {
  if (state.filterLabels.length !== 0) {
    return data.filter(
      (note) =>
        note.labels.filter((label) => state.filterLabels.includes(label))
          .length > 0
    );
  }
  return data;
};
const Compose =
  (state, ...functions) =>
  (data) =>
    functions.reduce((acc, cur) => cur(state, acc), data);
export { sortByPriority, Compose, filterByLabel };
