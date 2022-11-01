import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import { Galeria } from "./pages/Galeria";
import { Contatos } from "./pages/FaleConosco";
import ContatoDetalhes from "./pages/ContatoDetalhes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="galeria" element={<Galeria />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/contatos/:id" element={<ContatoDetalhes />} />
      <Route />
      <Route path="*" element={<h1>errou</h1>} />
    </Routes>
  );
}

export default App;
