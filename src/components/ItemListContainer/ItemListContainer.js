//* IMPORTAMOS COMPONENTES DE REACT
import { React, useState, useEffect } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMLIST PARA AGRUPAR LOS ITEMS
import ItemList from "../ItemList/ItemList";

//* IMPORTAMOS LOS ESTILOS
import "./ItemListContainer.css";

//* IMPORTAMOS LOS PRODUCTOS
import { ProductData } from "../../helpers/Promesa";

function ItemListContainer() {
    //* TOMAMOS LOS ELEMENTOS PARA CREAR UNA PROMISE HACIENDO EL MOCK DE SERVIDOR
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const res = await ProductData();
            setItems(res);
        } catch (err) {
            console.log("Error", err);
        }
    };

    return (
        <div className="contenedorTxt">
            <h2 className="itemTitulo">Nuestros Productos</h2>

            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;
