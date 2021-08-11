//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS LOS ESTILOS DEL CONTADOR
import "./ItemList.css";

//* IMPORTAMOS EL COMPONENTE ITEM QUE VA A CONTENER LA INFO DE LOS PRODUCTOS
import Item from "../Item/Item";


    // *  ITERAMOS LOS PRDUCTOS PARA PINTARLOS EN EN CONTENEDOR 

function ItemList({ items }) {
    function itemProp({ id, precio, titulo, imagen }) {
        return <Item id={id} titulo={titulo} precio={precio} imagen={imagen}/>;
    }

    return (
        <>
            <div className="contenedorList">{items.map(itemProp)}</div>
        </>
    );
}

export default ItemList;
