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
import { imagesLenguajeDeMarca, imagesLenguajeDeProgramacion, imagesFrameWorks } from '../assets/import.js'; 
const { html, css } = imagesLenguajeDeMarca;
const { js, } = imagesLenguajeDeProgramacion;
const { angular, } = imagesFrameWorks;
/*-------------------------------------- */

const Portfolio =   () =>{
  return (
      <Hero titulo={"Jose de Haro Jiménez"}  images={[css , html, js, angular]} descripcion={"jdjwbedjwd"} tecnologiasInfo={redesSociales}></Hero>
  );
}

export default Portfolio;