//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS LOS ESTILOS DEL CONTENEDOR
import "./ItemListContainer.css";

//* IMPORTAMOS EL COMPONENTE CONTADOR
import ItemCount from "../ItemCount/ItemCount";

//* SE CREAN EL CONTENEDOR DONDE VAN A ESTAR TODOS LOS PRODUCTOS"

export const ItemListContainer = (props) => {
    return (
        <div>
            <div className="hero">

                <div className="contenedor">

                    <h1 className="titulo">{props.saludos}</h1>

                    {/* COMPONENTE CONTADOR */}
                    <ItemCount stock={5} initial={1} />
                    
                </div>
            </div>
        </div>
    );
};
