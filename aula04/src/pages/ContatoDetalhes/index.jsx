import { useParams, useLocation } from "react-router-dom";

const ContatoDetalhes = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log(state);

  //      Criar um objeto com id, nome e email
  //      passar via state pro contato 2
  //      puxar o id do contato que foi criado dentro do to
  //      recuperar a informação com useLocation

  console.log(typeof id);

  const renderizaNome = () => {
    switch (id) {
      case "1":
        return "João Felipe";
      // break;
      case "2":
        return "Amanda";
      // break;
      case "3":
        return "Caroline";
      // break;
      default:
        return "DESCONHECIDO";
      // break;
    }
  };

  //Renderização condiconal Através do IF
  if (id == "1") {
    return <h1>João que veio do if</h1>;
  }

  return (
    <h1>
      {/* Renderização Condicional com operador lógico */}
      {id == "2" && "Contato: Amanda que veio do &&"}
      {/* Contato: {renderizaNome()} */}
      {/* Renderização condicional com operador Ternário */}
      {id == 3 ? "Caroline do Operador ternário" : null}
    </h1>
  );
};

export default ContatoDetalhes;
