import "./styles.css";
import { useState } from "react";

const Teste = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [display, setDisplay] = useState("Teste de idade");
  const [cor, setCor] = useState("rgba(255, 255, 255, 0.87)");

  const handleLogin = () => {
    if (idade >= 18) {
      setDisplay("pode dirigir, " + nome);
      setCor("green");
    } else {
      setDisplay("xofem");
      setCor("red");
    }
  };

  const handleReset = () => {
    setDisplay("Teste de idade");
    setCor("rgba(255, 255, 255, 0.87)");
    setNome("");
    setIdade("");
  };

  return (
    <div>
      <h1 style={{ color: cor }}>{display}</h1>

      <h2>Insira seu nome</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <h2>Insira sua idade</h2>
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <div style={{ marginTop: 20 }}>
        <input type="button" value="TESTAR" onClick={handleLogin} />
        <input type="button" value="RESET" onClick={handleReset} />
      </div>
    </div>
  );
};

export default Teste;
