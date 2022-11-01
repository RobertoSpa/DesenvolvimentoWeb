import { Link } from "react-router-dom";
import "./styles.css";

export function Contatos() {
  return (
    <>
      <div className="container">
        <h1>contatos</h1>
        <img src="./src/assets/agenda.svg" alt="agenda" />
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/contatos/1">
          <button>jao</button>
        </Link>
        <Link to="/contatos/2">
          <button>marco</button>
        </Link>
        <Link to="/contatos/3">
          <button>maria</button>
        </Link>
      </div>
    </>
  );
}
