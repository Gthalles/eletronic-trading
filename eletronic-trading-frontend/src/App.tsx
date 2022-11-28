import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import "./styles/globalStyle.css";

function App() {
    return (
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    );
}

export default App;
