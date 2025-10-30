import React from "react";
import "./Background.css";
import { useEffect } from "react";
import { getandCreateparticles } from "./BackgroundAnimation.js";
const Background = () => {
   useEffect(() => {
    getandCreateparticles(); 
    
  }, []);
  return (
    <>
      <section className="containerBackground">
        <></>
        <div className="contenedorParticulas">
        </div>
      </section>
    </>
  );
};

export default Background;
