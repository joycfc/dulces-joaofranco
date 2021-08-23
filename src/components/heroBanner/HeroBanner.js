//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS COMPONENTES DEL BANNER
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <div>
            <div className="hero">
                <h1 className="titulo">Bienvenidos</h1>
                <h2 className="subtitulo">Tienda de Dulces</h2>
            </div>
        </div>
    );
};

export default HeroBanner;
