import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="bagulho">
        <Link to="/contatos">
          <button>contatos</button>
        </Link>

        <Link to="/galeria">
          <button>galeria</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
