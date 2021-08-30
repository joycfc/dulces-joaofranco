//* IMPORTAMOS COMPONENTES DE REACT
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//* IMPORTAMOS LOS ESTILOS DEL CONTADOR
import "./ItemList.css";

//* IMPORTAMOS EL COMPONENTE ITEM QUE VA A CONTENER LA INFO DE LOS PRODUCTOS
import Item from "../Item/Item";

// *  ITERAMOS LOS PRODUCTOS PARA PINTARLOS EN EN CONTENEDOR

function agregarItems({ id, titulo, precio, imagen, category, stock }, index) {
    return (
        <div>
            <Item
                id={id}
                titulo={titulo}
                precio={precio}
                imagen={imagen}
                key={index}
                category={category}
                stock={stock}
            />
        </div>
    );
}

function ItemList({ items }) {
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);


    
    return (
        <>
            <div className="contenedorList">{items.map(agregarItems)}</div>
        </>
    );
}

export default ItemList;
