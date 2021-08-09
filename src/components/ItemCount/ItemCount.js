//* IMPORTAMOS COMPONENTES DE REACT
import { React, useState } from "react";

//* IMPORTAMOS LOS ESTILOS DEL CONTADOR
import "./ItemCount.css";

//* IMPORTAMOS LOS ICONOS DE FONT-AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//* SE CREAN LAS PROPS "STOCK" Y EL VALORINICIAL PARA SETEAR SUS VALORES"

function ItemCount({ stock, initial }) {
    const [contador, setCounter] = useState(initial);

    return (
        <>
            <div className="cardContainer">
                <div className="cardCounter">
                    <button
                        className="btnCounter"
                        lassName="btnCounter"

                        // * CAPTURA EL CLICK Y AGREGA SI EL CONTADOR ES MENOR AL STOCK RESERVADO
                        onClick={() => {
                            if (contador < stock) {
                                setCounter(contador + 1);
                            }
                        }}
                    >
                        <FontAwesomeIcon
                            className="plusCircle"
                            icon="plus-circle"
                        />
                    </button>

                    {/* // VALOR DEL CONTADOR */}

                    <p className="counterNumber">{contador}</p>
                    <button
                        className="btnCounter"

                        // * CAPTURA EL CLICK Y ELIMINA SI EL CONTADOR ES MENOR AL STOCK RESERVADO
                        onClick={() => {
                            if (contador > initial) {
                                setCounter(contador - 1);
                            }
                        }}
                    >
                        <FontAwesomeIcon
                            className="minusCircle"
                            icon="minus-circle"
                        />
                    </button>
                </div>
                <div className="cardCounter">
                    <button className="add">Agregar al Carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
