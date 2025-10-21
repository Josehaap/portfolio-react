import React from "react";
import './PortfolioPages.css';
import Hero from '../components/heroComponent/Hero';
import BackGround from '../components/Background/Background';
import css from "../assets/img/lenguajes_marcas/css.png";
import html from "../assets/img/lenguajes_marcas/html-5.png";
import js from "../assets/img/lenguajes_programacion/js.png";
import angular from "../assets/img/framewroks_librerias/angular.png";
import redesSociales from '../data/redesSociales.json';

const Portfolio =   () =>{
  return (
      <Hero titulo={"Jose de Haro Jiménez"}  images={[css,html,js, angular]} descripcion={"jdjwbedjwd"} tecnologiasInfo={redesSociales}></Hero>
  );
}

export default Portfolio;