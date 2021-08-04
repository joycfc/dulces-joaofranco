import React from "react";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div>
      <div className="hero">
        <div className="contenedor">
          <h1 className="titulo">{props.saludos}</h1>
          <h3 className="subtitulo">
            {props.contenido}
          </h3>
        </div>
      </div>
    </div>
  );
};
