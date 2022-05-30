import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login/Login";
import { NotesPage } from "./Pages/Notes/NotesPage";
import { Signup } from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
