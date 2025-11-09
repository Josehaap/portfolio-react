import React from "react";
import "./Background.css";
import { useEffect } from "react";
import { getandCreateparticles } from "./BackgroundAnimation.js";


const Background = ({childre}) => {
   useEffect(() => {
    getandCreateparticles(); 
    
  }, []);
  return (
    <>
      <section className="containerBackground">
        <></>
        <div className="contenedorParticulas">
          {childre}
        </div>
      </section>
    </>
  );
};

export default Background;
