//* IMPORTAMOS COMPONENTES DE REACT
import React, { useEffect, useState } from "react";

//* IMPORTAMOS EL COMPONENTE ITEMDETAIL PARA USARLO DENTRO DEL CONTENEDOR
import ItemDetail from "../itemDetail/ItemDetail";

//* IMPORTAMOS LOS ESTILOS
import "./ItemDetailContainer.css";

// *CREAMOS EL CONTENEDOR
function ItemDetailContainer() {

    // *DEFINIMOS LAS VARIABLES
    const [item, setItem] = useState([]);

    // *HACEMOS UN LLAMADO ASYNC PARA SIMULAR UN DELAY
    const getItem = async () => {
        setTimeout(async () => {
            setItem({
                
                // *SETEAMOS LOS ITEMS
                id: 0,
                titulo: "Item Detail",
                precio: 1000,
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores quis omnis, totam autem tenetur dolor in consectetur laudantium.",
                imagen: "http://fpoimg.com/250x300?text=aqui va una imagen&bg_color=ff706b&text_color=ffffff",
            });
        }, 2000);
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className="contenedorDetalles">
            <ItemDetail item={item} />;
        </div>
    );
}

export default ItemDetailContainer;
