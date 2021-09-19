//* IMPORTAMOS COMPONENTES DE REACT
import React, { useContext, useState } from "react";

//* IMPORTAMOS COMPONENTES DE REACT-BOOTSTRAP
import { Card } from "react-bootstrap";

//* IMPORTAMOS EL COMPONENTE LINK PARA LOS ENLACES
import { Link } from "react-router-dom";

//* IMPORTAMOS EL COMPONENTE CONTADOR
import ItemCount from "../ItemCount/ItemCount";

//* IMPORTAMOS EL CARD CONTEXT
import { CartContext } from "../../context/CartContext";

//* IMPORTAMOS LOS ESTILOS
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    const { title, price, image, info, stock } = item;

    const quantityInitial = 0;

    const [quantity, setQuantity] = useState(quantityInitial);

    //* TRAEMOS LA FUNCION DEL CARTCONTEXT PARA AGREGAR PRODUCTOS
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart(item, quantity);
    };

    return (
        <div className="contenedorCard">
            <div className="CardDetalle">
                <img className="detalleImagen" src={image} />
                <Card.Body className="cardBody">
                    <h3 className="detailTitulo">{title}</h3>
                    <p className="detailInfo">{info}</p>
                    <p className="detailPrecio">${price}</p>
                    {quantity > quantityInitial ? (
                        <Link to="/cart">
                            <button className="btnTerminar">
                                Terminar mi Compra
                            </button>
                        </Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    )}
                    <Link to="/ItemListContainer">
                        <button className="btnNormal">Seguir Comprando </button>
                    </Link>
                </Card.Body>
            </div>
        </div>
    );
};

export default ItemDetail;
