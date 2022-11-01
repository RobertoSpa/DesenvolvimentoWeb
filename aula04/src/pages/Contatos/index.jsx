import { Link } from "react-router-dom";

export const Contatos = () => {
  const contato = {
    id: 1,
    nome: "João Felipe",
    email: "joao@serratec.com",
  };

  const contato2 = {
    id: 2,
    nome: "Juliana",
    email: "juliana@serratec.com",
  };

  return (
    <>
      <h1>CONTATOS</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/galeria">GALERIA</Link>
        </li>
      </ul>

      <ol>
        <li>
          <Link
            to={`/contatos/${contato.id}`}
            state={{ nome: contato.nome, id: contato.id }}
          >
            João Felipe
          </Link>
        </li>
        <li>
          <Link
            to={`/contatos/${contato2.id}`}
            state={{ nome: contato2.nome, id: contato2.id }}
          >
            Amanda
          </Link>
        </li>
        <li>
          <Link to="/contatos/3">Caroline</Link>
        </li>
      </ol>
    </>
  );
};
