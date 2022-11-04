import { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";
import Gatos from "./components/gatos";

function App() {
  return (
    <>
      <h1>use effect</h1>
      {/* <button onClick={() => getCat()}>muda gato</button> */}
      <Gatos />
    </>
  );
}

export default App;
