//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";
import { Link } from "react-router-dom";

//* IMPORTAMOS COMPONENTES DEL BANNER
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <div>
            <div className="hero">
                <div className="contenedorTexto">
                    <h1 className="titulo">
                        Existen pasiones, adicciones y luego están nuestros
                        cupcakes, que es otro nivel.
                    </h1>
                    <h2 className="subtitulo">Ven y prueba nuestros productos</h2>
                    <Link to="/ItemListContainer" >
                    <button className="btnNormal">nuestros productos</button>
                    </Link >
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
