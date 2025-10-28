import React from 'react';
import './Element3d.css'

const Element3d = ({tip}) =>{
    if(tip.toLowerCase() == "cubo") return <Cubo></Cubo>
    if(tip.toLowerCase() == "esfera") return <Esfera></Esfera>
}

const Cubo = ()=>{
    return(
    <section className="contenedorCubo">
        <div className='cubo'>
              <div className="cara Front"></div>
                <div className="cara Back"></div>
                <div className="cara Top"></div>
                <div className="cara Bottom"></div>
                <div className="cara Right"></div>
                <div className="cara Left"></div>
        </div>
      
    </section>
    )
}
const Esfera = ()=>{
    return(
    <section className="contenedorCubo">
        <div className="cara Front"></div>
        <div className="cara Back"></div>
        <div className="cara Top"></div>
        <div className="cara Bottom"></div>
        <div className="cara Right"></div>
        <div className="cara Left"></div>
    </section>
    )
}

export default Element3d;