//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS EL COMPONENTE CONTADOR
import ItemCount from "../ItemCount/ItemCount";

import { Button } from "react-bootstrap";

//* IMPORTAMOS LOS ESTILOS
import "./Item.css";

import { Link } from "react-router-dom";

function Item({ titulo, precio, imagen, id }) {
    
    return (
        <div className="cardProductos">
            <img className="carImagen" src={imagen} />
            <div>
                <h3 className="cardTitulo">{titulo}</h3>
                <p className="cardPrecio">${precio}</p>
                {/* COMPONENTE CONTADOR */}
                <ItemCount stock={5} initial={1} />
            </div>
            <Link to={`/item/${id}`}>
                <Button className="nfo">info</Button>
            </Link>
        </div>
    );
}

export default Item;
