import React from "react";
import "./HeroBanner.css";

const HeroBanner = (props) => {
    return (
        <div>
            <div className="hero">
                <h1 className="titulo">Bienvenidos</h1>
                <h2 className="subtitulo">{props.saludos}</h2>
            </div>
        </div>
    );
};

export default HeroBanner;
