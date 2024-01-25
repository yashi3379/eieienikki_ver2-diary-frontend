// src/App.js

import React from "react";
import { Router } from './routes/Router';
import { UserProvider } from "./providers/UserProvider";
import axios from 'axios';

// Axios のデフォルト設定
axios.defaults.baseURL = 'http://localhost:3001'; // あなたのAPIサーバーのアドレス
axios.defaults.withCredentials = true;

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
