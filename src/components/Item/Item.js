//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS EL COMPONENTE CONTADOR
import ItemCount from "../ItemCount/ItemCount";

//* IMPORTAMOS LOS ESTILOS
import "./Item.css"

function Item({ titulo, precio, imagen }) {
    return (
        <div className="cardProductos">
            <img className="carImagen" src={imagen} />
            <div>
                <h3 className="cardTitulo">{titulo}</h3>
                <p className="cardPrecio">${precio}</p>
                {/* COMPONENTE CONTADOR */}
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
    );
}

export default Item;
