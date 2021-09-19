//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";
import { Link } from "react-router-dom";

//* IMPORTAMOS COMPONENTES DEL BANNER
import "./HeroProductos.css";

const HeroProductos = () => {
    return (
        <div>
            <div className="heroProductos">
                <div className="contenedorTexto">                    
                    <h2 className="subtituloProductos">
                        Ven y prueba nuestros productos
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HeroProductos;
