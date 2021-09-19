import React from "react";
import "./Styles.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const OrderCreated = () => {
    const { orderId } = useParams();
    return (
        <div className="contenedorOrden">
            <div className="contenedorId">
                <h2 className="tituloCompra">Muchas Gracias por tu compra</h2>
                <h4 className="tituloId">Tu orden es: {orderId}</h4>
            </div>
            <Link to="/ItemListContainer">
                <button className="btnNormal">Seguir Comprando </button>
            </Link>
        </div>
    );
};

export default OrderCreated;
