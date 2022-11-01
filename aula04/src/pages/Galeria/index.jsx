import { Link } from "react-router-dom";
import "./styles.css";

export function Galeria() {
  return (
    <>
      <div className="container">
        <h1>galeria</h1>
        <img src="./src/assets/picture.svg" alt="quadro" />
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
}
