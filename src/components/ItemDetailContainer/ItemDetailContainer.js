//* IMPORTAMOS COMPONENTES DE REACT
import React, { useEffect, useState } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMDETAIL PARA USARLO DENTRO DEL CONTENEDOR
import ItemDetail from "../itemDetail/ItemDetail";

//* IMPORTAMOS LOS ESTILOS
import "./ItemDetailContainer.css";

//* IMPORTAMOS LOS PRODUCTOS
import { Productos } from "../productos/Productos";

import { useParams } from "react-router-dom";




// *CREAMOS EL CONTENEDOR
function ItemDetailContainer() {
    
    // *DEFINIMOS LAS VARIABLES
    const [item, setItem] = useState([]);

    // *TOMAMOS EL ID DEL PRODUCTO

    const { productoId } = useParams();

    const getItem = (productoId) => {
        const Unidad = Productos.find((element) => element.id == productoId);
        setItem(Unidad);
    };

    useEffect(() => {
        getItem(productoId);
    }, []);

    return (
        <div className="contenedorDetalles">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
