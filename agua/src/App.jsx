import { useState } from "react";
import "./App.css";

function App() {
  const [copo, setCopo] = useState(1);
  const [ml, setMl] = useState(0);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState("");
  const [meta, setMeta] = useState(0);
  const [hist, setHist] = useState("");
  const date = new Date().toLocaleString();

  const handleMl = (batata) => {
    setMl(batata.target.value);
  };

  const handleMeta = (banana) => {
    setMeta(banana.target.value);
  };

  const handleCalc = () => {
    setCopo((copo) => copo + 1);
    setTotal(copo * ml);
    setHist(`${date} ${hist}`);
    if (copo * ml >= meta) {
      setMsg("PRABUAINZ");
    }
  };

  const handleReset = () => {
    setCopo(1);
    setTotal(0);
    setMsg("");
  };

  return (
    <>
      <div className="container">
        <h1>Calculo de agua ingerida</h1>
        <h2>Insira a medida do seu copo abaixo em ml</h2>
        <input type="number" onChange={handleMl} />

        <h2>Insira a sua meta diaria em ml</h2>
        <input type="number" onChange={handleMeta} />

        <h2>
          Clique ate chegar na quantidade de copos bebidos para realizar o
          calculo
        </h2>

        <div className="botoes">
          <button onClick={handleCalc}>Copos: {copo - 1}</button>

          <button onClick={handleReset}>Reset!</button>
        </div>

        <h1>Quantidade ingerida: {total}ml</h1>

        <h2>{msg}</h2>

        <div className="historico">
          <p>{hist}</p>
        </div>
        
      </div>
    </>
  );
}

export default App;
