//* IMPORTAMOS COMPONENTES DE REACT
import React, { useEffect, useState } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMDETAIL PARA USARLO DENTRO DEL CONTENEDOR
import ItemDetail from "../itemDetail/ItemDetail";

//* IMPORTAMOS LOS ESTILOS
import "./ItemDetailContainer.css";

//* IMPORTAMOS LOS PRODUCTOS

import { useParams } from "react-router-dom";

import { getProductById } from "../productos/Productos";


function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId).then((res) => {
            setItem({ id: res.id, ...res.data() });
        });
    }, [itemId]);

    return <ItemDetail  item={item} />;
    
}

export default ItemDetailContainer;
