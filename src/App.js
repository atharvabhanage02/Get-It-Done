import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components/RequiresAuth";
import { Archive } from "./Pages/Archive/Archive";
import { Login } from "./Pages/Login/Login";
import { NotesPage } from "./Pages/Notes/NotesPage";
import { Signup } from "./Pages/Signup/Signup";
import { Trash } from "./Pages/Trash/Trash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/notes"
          element={
            <RequiresAuth>
              <NotesPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
