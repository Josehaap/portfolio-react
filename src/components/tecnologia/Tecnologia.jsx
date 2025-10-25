import React from 'react';
import  './Tecnologia.css';


const Tecnologia = ({info})=>{
    return (
        <>
            <section className="sectionTech" >
                <img src={info.imgPath} />
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.titulo}
                </a>
            </section>
        </>
    );
}

export default Tecnologia;