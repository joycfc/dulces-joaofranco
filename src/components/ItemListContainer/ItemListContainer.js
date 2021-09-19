//* IMPORTAMOS COMPONENTES DE REACT
import { React, useState, useEffect } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMLIST PARA AGRUPAR LOS ITEMS
import ItemList from "../ItemList/ItemList";

//* IMPORTAMOS LOS ESTILOS
import "./ItemListContainer.css";

import { listCallback } from "../../components/productos/Productos";

import { getFirestore } from "../../firebase/index";

import HeroProductos from "../HeroProductos/HeroProductos";
import Footer from "../../components/footer/Footer"

function ItemListContainer(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getFirestore()
            .collection("items")
            .get()
            .then((res) => {
                const items = listCallback(res);
                console.log(items);
                setItems(items);
            });
    }, []);

    return (
        <div className="contenedorTxt">
            <HeroProductos />
            <h2 className="itemTitulo">Nuestros Productos</h2>
            <div className="contenedorList">
                <ItemList items={items} />
            </div>
            <Footer />
        </div>
    );
}

export default ItemListContainer;
