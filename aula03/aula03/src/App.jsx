import { useState } from "react";
import "./App.css";

function App() {
  const [textoDigitado, setTextoDigitado] = useState("");

  const handleText = () => {
    console.log("clicado");
  };

  const handleTextoDigitado = (texto) => {
    console.log(texto.target.value);
    setTextoDigitado(texto.target.value);
  };

  return (
    <>
      <h1>info: {textoDigitado}</h1>
      <input
        type="text"
        placeholder="Digite aqui"
        //onChange={(e) => setTextoDigitado(e.target.value)} />
        //onChange={(e) => handleTextoDigitado(e.target.value)} />
        onChange={handleTextoDigitado}
        value={textoDigitado}
      />
      <button onClick={handleText}>Enviar</button>
    </>
  );
}

export default App;
