import "./Card.css";
import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionCard = ({ infoCard }) => {
  const cardRef = useRef([]); //Referenciamos a un conjunto de elementos necesario en react.
  useEffect(() => {
    const cards = cardRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sectionAllcard",
        start: "top 90%",
        end: "40% 10%",
        scrub: true,
       // markers: true,
      },
    });
    tl.from(cards, { opacity: 0 }).to(cards, {
      y: 0,
      x: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 1,
      ease: "bounce.out",
    });
  }, []);
  return (
    <>
      <h1 className="sectionCard">{"<Proyectos>"}</h1>

      <section className="sectionAllcard">
        {infoCard.map((objectLiteral, index) => (
          <Card
            ref={(el) => (cardRef.current[index] = el)}
            key={index}
            objectLiteral={objectLiteral}
          />
        ))}
      </section>
      <h1 className="sectionCard">{"</Proyectos>"}</h1>
    </>
  );
};

const Card = forwardRef(({ objectLiteral }, ref) => {
  return (
    <section
      ref={ref}
      className={`card ${objectLiteral.fullwidth ? "cardFullwidth" : ""}`}
    >
      <iframe
        src={objectLiteral.links.web}
        title={objectLiteral.nombre}
        className="iframeProyecto"
      />
      <div className="informacionProyecto">
        <h1>{objectLiteral.nombre}</h1>
        {objectLiteral.endesarrollo ? (
          <span className="desarrollo">En desarrollo</span>
        ) : (
          <span className="completado">Completado</span>
        )}
        <div className="stack">
          <h2>Stack</h2>
          {objectLiteral.tecnologias.map((ruta, idx) => (
            <img key={idx} src={ruta} alt={`Tecnologia ${idx}`} />
          ))}
        </div>
        <p>{objectLiteral.descripcion}</p>
      </div>
    </section>
  );
});

export default SectionCard;
