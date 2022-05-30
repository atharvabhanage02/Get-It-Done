import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components/RequiresAuth";
import { Login } from "./Pages/Login/Login";
import { NotesPage } from "./Pages/Notes/NotesPage";
import { Signup } from "./Pages/Signup/Signup";

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
      </Routes>
    </div>
  );
}

export default App;
