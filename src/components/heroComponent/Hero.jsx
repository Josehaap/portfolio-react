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
      { x: 0, opacity: 1, duration: 0.5 }
    );

    tl.to(icons, { opacity: 1, duration: 0.5, stagger: 0.01 , ease:"power1.out"}, "+=0");

    tl.fromTo(texts[0], { opacity: 0 }, { opacity: 1, duration: 1 }, "+=0");

    const split = new SplitText(texts[1], { type: "chars, words" });
    tl.from(
      split.chars,
      {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=1"
    );
    const splitsp = new SplitText(texts[2], { type: "chars, words" });

    tl.fromTo(
      splitsp.chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "+=0"
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

    [...split.chars, ...splitsp.chars].forEach((char) => {
      char.addEventListener("mouseenter", () => {
        gsap.from(char, {
          color: "#664069ff",
          x: () => gsap.utils.random(-25, 25),
          y: () => gsap.utils.random(-25, 25),
          duration: 0.9,
          scale: 1.8,
        });
      });

      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          duration: 0.2,
          delay: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "rough({ strength: 1, points: 20, template: none, taper: 'both', randomize: true})",
        });
      });
    });
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
