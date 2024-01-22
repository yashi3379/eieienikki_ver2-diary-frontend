// src/App.js

import React from "react";
import { Router } from './routes/Router';
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>

  );
}


export default App;
