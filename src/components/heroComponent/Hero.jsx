import React from "react";
import './Hero.css';
import Tecno from '../tecnologia/Tecnologia';

//Images debería ser un array de rutas. 
const Hero = ({images, titulo, subtitulo, descripcion, tecnologiasInfo}) => {
    /*Voy a mapear el array de rutaw a un array de elementos para luego devolverlo */
  return(
    <>
        <section className="sectionHero">
            <div className="contenedorLogo">
              {
                 images.map((rutaImg, index) => <img src={rutaImg} className={`imageHero-${index}`}></img>)
              }
            </div>
            <article className="articleHero">
              <h1>{titulo}</h1>
              <p>{subtitulo}</p>
              <p>{descripcion}</p>
               <div className="contenedorTecno">
                {
                  tecnologiasInfo.map((element, index) => (<Tecno info={element} clase={index}></Tecno>))
                }
              </div>
            </article>
           
        </section>
    </>
    
  )
}
export default Hero