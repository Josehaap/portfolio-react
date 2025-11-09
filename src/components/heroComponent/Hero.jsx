import React, { useEffect, useRef } from "react";
import "./Hero.css";
import "./responsive.css";
import Tecno from "../tecnologia/Tecnologia";
import { animacionText } from "../toolsGsap.js";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Timeline } from "gsap/gsap-core.js";

// Registramos el plugin de SplitText (por si lo necesitas dentro de animacionText)
gsap.registerPlugin(SplitText);

const Hero = ({
  images,
  titulo,
  subtitulo,
  descripcion,
  tecnologiasInfo,
  bool = false,
}) => {
  const textRef = useRef([]);
  const iconsRef = useRef([]);
  const contenedorBottons = useRef(null);

  useEffect(() => {
    const texts = textRef.current;
    const icons = iconsRef.current;
    let tl = gsap.timeline();

    tl.fromTo(
      ".contenedorLogo",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 }
    );

    tl.to(icons, { opacity: 1, duration: 0.4, stagger: 0.15 }, "-=0.3");

    tl.fromTo(texts[0], { opacity: 0 }, { opacity: 1, duration: 0.8 }, "+=0");

    function randomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    const split = new SplitText([texts[1], texts[2]], { type: "chars, words" });
    tl.from(
      split.chars,
      {
        x: () => randomBetween(-150, 150),
        y: () => randomBetween(-150, 150),
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power2.out",
      },
      "-=1"
    );

    tl.fromTo(
      contenedorBottons.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );
    const splitspan = new SplitText(texts[3], { type: "chars, words" });

    tl.fromTo(
      splitspan.chars,
      { x: -25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, stagger: 0.3, repeat: -1, yoyo: true },
      "-=0.4"
    );
  }, []);

  return (
    <>
      <section className="sectionHero">
        <div className="contenedorLogo">
          {images.map((rutaImg, index) => (
            <img
              ref={(el) => (iconsRef.current[index] = el)}
              key={index}
              src={rutaImg}
              className={`imageHero-${index}`}
            />
          ))}
        </div>

        <article className="articleHero">
          <h1 ref={(el) => (textRef.current[0] = el)}>{titulo}</h1>
          <p ref={(el) => (textRef.current[1] = el)}>{subtitulo}</p>
          <p ref={(el) => (textRef.current[2] = el)}>{descripcion}</p>

          <div className="contenedorTecno" ref={contenedorBottons}>
            {tecnologiasInfo.map((element, index) => (
              <Tecno key={index} info={element} clase={index} />
            ))}
          </div>
        </article>

        {/* Si bool es true, mostramos la animación de las flechas */}
        {bool && (
          <span className="scroll" ref={(el) => (textRef.current[3] = el)}>
            {">>>"}
          </span>
        )}
      </section>
    </>
  );
};

export default Hero;
