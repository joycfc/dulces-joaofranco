//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS EL COMPONENTE CONTADOR
import ItemCount from "../ItemCount/ItemCount";

//* IMPORTAMOS LOS ESTILOS
import "./ItemDetail.css";

//* CREAMOS EL COMPONENTE ITEM DETAIL QUE NOS DARA EL DETALLE DEL PRODUCTO CON TODAS SUS PROPIEDADES 

function ItemDetail({ item }) {


    
    return (
        <>
            <div className="CardDetalle">

                <img className="detalleImagen" src={item.imagen} />

                <div className="cardDetalle">

                    <h3 className="detailTitulo">{item.titulo}</h3>

                    <p className="detailInfo">{item.info}</p>

                    <p className="detailPrecio">${item.precio}</p>
                    {/* COMPONENTE CONTADOR */}
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
