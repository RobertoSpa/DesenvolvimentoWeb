import "./App.css";
import Contato from "./components/Contato";

function App() {
  // const contatos = [
  //   { id: 1, nome: "jao", email: "jao@mail.com" },
  //   { id: 2, nome: "marcola", email: "mark@mail.com" },
  //   { id: 3, nome: "kuririn", email: "ku@mail.com" },
  // ];

  const profs = [
    { id: 1, nome: "saber", materias: ["historia", "geografia", "guerra"] },
    { id: 2, nome: "archer", materias: ["matematica", "geometria", "fisica"] },
    {
      id: 3,
      nome: "berserker",
      materias: ["literatura", "filosfia", "sociologia"],
    },
  ];

  return (
    <>
      {/* <Contato bagulho={contatos[1]} /> */}
      {/* {contatos.map((trosoba) => {
        return <Contato bagulho={trosoba} key={trosoba.id} />;
      })} */}

      {profs.map((item) => {
        return <Contato batata={item} key={item.id} />;
      })}
    </>
  );
}

export default App;
