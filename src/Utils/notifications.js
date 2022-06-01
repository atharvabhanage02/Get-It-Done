import { toast } from "react-toastify";
const base = { position: "bottom-right", theme: "colored", autoClose: 1000 };
const notifyAddNote = () => {
  toast.success("Note Added", { ...base });
};
const notifyOnDelete = () => {
  toast.error("Note moved to Trash", { ...base });
};
const notifyOnArchive = () => {
  toast.warning("Note Archived", { ...base });
};
const notifyOnPin = () => {
  toast.success("Note Pinned ", { ...base });
};
const notifyOnUnpin = () => {
  toast.success("Note Unpinned", { ...base });
};
export {
  notifyAddNote,
  notifyOnArchive,
  notifyOnDelete,
  notifyOnPin,
  notifyOnUnpin,
};
