import { useState, useEffect } from "react";
import api from "../../services/api";

function Gatos() {
  const [cat, setCat] = useState([]);

  const getCat = async () => {
    const { data } = await api.get("/images/search");
    setCat(data);
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      <button onClick={getCat}>muda gato</button>
      <h1>{cat.length > 0 && cat[0].url}</h1>
      {cat.length > 0 ? (
        <img className="imgCat" src={cat[0].url} alt="gatin" />
      ) : (
        <h1>sem img no momento</h1>
      )}
    </>
  );
}

export default Gatos;
