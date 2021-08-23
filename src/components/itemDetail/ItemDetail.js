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

    const { id, titulo, precio, imagen, info, stock } = item;

    const quantityInitial = 0;

    const [quantity, setQuantity] = useState(quantityInitial);

    //* TRAEMOS LA FUNCION DEL CARTCONTEXT PARA AGREGAR PRODUCTOS
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart(item, quantity);
    };

    return (
        <div className="CardDetalle" id={`detail-product-${id}`}>
            <img className="detalleImagen" src={item.imagen} />
            <Card.Body>
                <h3 className="detailTitulo">{item.titulo}</h3>
                <p className="detailInfo">{item.info}</p>
                <p className="detailPrecio">${item.precio}</p>
                {quantity > quantityInitial ? (
                    <Link to="/cart">
                        <button className="btnTerminar">
                            Terminar mi compra
                        </button>
                    </Link>
                ) : (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                )}
            </Card.Body>
        </div>
    );
};

export default ItemDetail;
