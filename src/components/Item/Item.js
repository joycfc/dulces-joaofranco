//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

// //* IMPORTAMOS EL COMPONENTE CONTADOR
// import ItemCount from "../ItemCount/ItemCount";

import { Button } from "react-bootstrap";

//* IMPORTAMOS LOS ESTILOS
import "./Item.css";

import { Link } from "react-router-dom";

function Item({ title, price, image, id }) {
    return (
        <div className="cardProductos">
            <img className="carImagen" src={image} />
            <div>
                <h3 className="cardTitulo">{title}</h3>
                <p className="cardPrecio">${price}</p>
            </div>
            <Link to={`/item/${id}`}>
                <Button className="nfo">info</Button>
            </Link>
        </div>
    );
}

export default Item;
