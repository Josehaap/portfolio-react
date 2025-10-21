import React from "react";
import './PortfolioPages.css';
import Hero from '../components/heroComponent/Hero';
import css from "../assets/img/lenguajes_marcas/css.png";
import html from "../assets/img/lenguajes_marcas/html-5.png";
import js from "../assets/img/lenguajes_programacion/js.png";
import angular from "../assets/img/framewroks_librerias/angular.png";
import redesSociales from '../data/redesSociales.json';

const Portfolio = ()=>{
    return(
        <Hero images={[css,html,js,angular]} titulo={'Jose de Haro Jiménez'} subtitulo={'Desarrollador Frontend'} descripcion={'Me encanta el desarrollo y el diseño web, intento apostar siempre por la calidad del codigo ya sea dentro del Frontend como en el Backend'}
         tecnologiasInfo={redesSociales} ></Hero>
    )
}

export default Portfolio;