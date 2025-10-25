import React from "react";
import './Card.css';

const SectionCard = ({ infoCard }) => {
  return (
    <>
      <h1 className="sectionCard">Proyectos</h1>

    <section className="sectionAllcard">
        {
          
        infoCard.map((objectLiteral, index) => (
          <Card key={index} objectLiteral={objectLiteral} />
        ))
      }
    </section>
      
    </>
  );
};

const Card = ({ objectLiteral }) => {
  return (
    <section className={`card ${objectLiteral.fullwidth ? "cardFullwidth" : ""}`}>
      <iframe src={objectLiteral.links.web} title={objectLiteral.nombre} className="iframeProyecto"  />
      <div className="informacionProyecto">
        <h1>{objectLiteral.nombre}</h1>
        {objectLiteral.endesarrollo ? <span className="desarrollo">En desarrollo</span> : <span className="completado">Completado</span>}
        <div className="stack">
          <h2>Stack</h2>
          {
            objectLiteral.tecnologias.map((ruta, idx) => (
              <img key={idx} src={ruta} alt={`Tecnologia ${idx}`} />
            ))
          }
        </div>

        <p>{objectLiteral.descripcion}</p>
      </div>
    </section>
  );
};

export default SectionCard;
