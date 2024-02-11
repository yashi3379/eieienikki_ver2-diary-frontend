// src/App.js

import React from "react";
import { Router } from './routes/Router';
import axios from 'axios';


// Axios のデフォルト設定
axios.defaults.baseURL = 'http://localhost:3001'; // あなたのAPIサーバーのアドレス
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router />
    </div>
    
  );
}


export default App;
