import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/Auth/auth-context";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./Context/NotesContext/NotesContext";
import { ArchivesProvider } from "./Context/ArchiveContext/ArchiveContext";
import { FilterProvider } from "./Context/FilterContext/FilterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <ArchivesProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </ArchivesProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
