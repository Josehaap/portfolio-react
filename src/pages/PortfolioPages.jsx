import React from "react";
/*Importación de las hojas de estilos */
import './PortfolioPages.css';
/*-------------------------------------- */
/*Importación de los componenentes */
import Hero from '../components/heroComponent/Hero.jsx';
import SectionCard from '../components/Card/Card.jsx';
import Element3D from '../components/3d/Element3d.jsx';
import Background from '../components/Background/Background.jsx';
/*-------------------------------------- */

/*Importación de información en json */
import redesSociales from '../data/redesSociales.json';
import infoPersonalData from '../data/personalDataHero.json';
import infoWebsData from '../data/webDesign.json';
/*-------------------------------------- */
/*Importación de información  */
import{ arrLenguajeDeMarca, arrLenguajeDeProgramacion, arrFrameWorks } from '../../public/assets/import.js'; 
const [html, css] = arrLenguajeDeMarca;
const [js] = arrLenguajeDeProgramacion;
const [angular] = arrFrameWorks;
/*-------------------------------------- */

const Portfolio =   () =>{
  return (
    <>
         <Hero titulo={infoPersonalData.nombre}  subtitulo={infoPersonalData.subtitulo} images={[ html,css , js, angular]} descripcion={infoPersonalData.descripcion} tecnologiasInfo={redesSociales} bool={true}></Hero>
         <SectionCard infoCard={infoWebsData}></SectionCard>
         <Element3D tip="cubo"></Element3D>
         <Background></Background>
        <Hero titulo={"pepe"}  subtitulo={"jkwnejnw"} images={[ html,css , js, angular]} descripcion={infoPersonalData.descripcion} tecnologiasInfo={redesSociales} bool={true}></Hero>
    </>
   
  );
}

export default Portfolio;