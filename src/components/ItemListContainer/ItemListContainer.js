//* IMPORTAMOS COMPONENTES DE REACT
import { React, useState, useEffect } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMLIST PARA AGRUPAR LOS ITEMS
import ItemList from "../ItemList/ItemList";

//* IMPORTAMOS LOS ESTILOS
import "./ItemListContainer.css";

//* IMPORTAMOS EL ARRAY DE LOS PRODUCTOS
import productData from "../productos/productos.json";

function ItemListContainer() {
    // TOMAMOS LOS ELEMENTOS PARA CREAR UNA PROMISE HACIENDO EL MOCK DE SERVIDOR
    const [items, setItems] = useState([]);
    useEffect(() => {
        setTimeout(async () => {
            setItems(productData);
        }, 2000);
    });
    
    return (
        <div className="contenedorTxt">

            <h2 className="itemTitulo">Nuestros Productos</h2>

            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;
