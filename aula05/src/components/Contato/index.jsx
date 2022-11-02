import "/src/components/Contato/syles.css";

function Contato(batata) {
  return (
    <>
      <div className="xablau">
        {/* <h1>{batata.bagulho.id}</h1>
        <h1>{batata.bagulho.nome}</h1>
        <h1>{batata.bagulho.email}</h1> */}

        <h1>{batata.id}</h1>
        <h1>{batata.nome}</h1>
        <h1>
          {batata.materias[0]}, {batata.materias[1]}, {batata.materias[2]}
        </h1>
      </div>
    </>
  );
}

export default Contato;
