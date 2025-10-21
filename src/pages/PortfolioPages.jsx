import React from "react";
/*Importación de las hojas de estilos */
import './PortfolioPages.css';
/*-------------------------------------- */
/*Importación de los componenentes */
import Hero from '../components/heroComponent/Hero.jsx'
/*-------------------------------------- */

/*Importación de información en json */
import redesSociales from '../data/redesSociales.json';
/*-------------------------------------- */
/*Importación de información  */
import{ arrLenguajeDeMarca, arrLenguajeDeProgramacion, arrFrameWorks } from '../assets/import.js'; 
const [html, css] = arrLenguajeDeMarca;
const [js] = arrLenguajeDeProgramacion;
const [angular] = arrFrameWorks;
/*-------------------------------------- */

const Portfolio =   () =>{
  return (
      <Hero titulo={"Jose de Haro Jiménez"}  images={[ html,css , js, angular]} descripcion={"jdjwbedjwd"} tecnologiasInfo={redesSociales}></Hero>
  );
}

export default Portfolio;