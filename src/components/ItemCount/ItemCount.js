//* IMPORTAMOS COMPONENTES DE REACT
import { React, useState } from "react";

//* IMPORTAMOS LOS ESTILOS DEL CONTADOR
import "./ItemCount.css";

//* IMPORTAMOS LOS ICONOS DE FONT-AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//* SE CREAN LAS PROPS "STOCK" Y EL VALORINICIAL PARA SETEAR SUS VALORES"
function ItemCount({ stock, initial, onAdd }) {

    const [counter, setCounter] = useState(initial);

    // SE CREAN LAS FUNCIONES DE LOS BOTONES
    function incrementar() {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    function decrementar() {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div className="cardCounter">
                <button
                    className="btnCounter"
                    // * CAPTURA EL CLICK Y ACTIVA LA FUNCION INCREMENTAR
                    onClick={incrementar}
                >
                    <FontAwesomeIcon
                        className="plusCircle"
                        icon="plus-circle"
                    />
                </button>
                {/* // VALOR DEL CONTADOR */}
                <p className="counterNumber"> {counter} </p>
                <button
                    className="btnCounter"
                    // * CAPTURA EL CLICK Y ACTIVA LA FUNCION DECREMENTAR
                    onClick={decrementar}
                >
                    <FontAwesomeIcon
                        className="minusCircle"
                        icon="minus-circle"
                    />
                </button>{" "}
            </div>
            <div className="cardCounter">
                <button className="add" onClick={() => onAdd(counter)}>
                    Agregar al carrito 
                </button>{" "}
            </div>{" "}
        </>
    );
}

export default ItemCount;
