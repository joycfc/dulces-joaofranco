import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
    const { cart, clearCart, removeFromCart, subTotal, total } =
        useContext(CartContext);

    return cart.length > 0 ? (
        <div className="containerCart">
            <Table className="contenedorTabla">
                <thead>
                    <tr>
                        <th>Productos</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((element) => (
                        <tr>
                            <div key={element.item.id}>
                                <td>
                                    <img
                                        className="thumbnail"
                                        alt={element.item.title}
                                        src={element.item.image}
                                    />
                                </td>
                                <td className="item">
                                    <span>{element.item.title}</span>
                                </td>
                                <td>
                                    <h4>Info</h4>
                                    <span>{element.item.info}</span>
                                </td>
                                <td>
                                    <h4>Precio unitario</h4>

                                    <span>{element.item.price}$</span>
                                </td>

                                <td>
                                    <h4>Agregar o eliminar</h4>

                                    <span>
                                        <Button
                                            className="btnProducto"
                                            onClick={() =>
                                                subTotal(element.item.id, 1)
                                            }
                                        >
                                            -{" "}
                                        </Button>
                                        {element.quantity}
                                        {"   "}
                                        <Button
                                            className="btnProducto"
                                            onClick={() =>
                                                total(
                                                    element.item.id,
                                                    element.quantity,
                                                    element.item.stock
                                                )
                                            }
                                        >
                                            +{" "}
                                        </Button>
                                    </span>
                                </td>
                                <td>
                                    <h4>Total Unitario</h4>
                                    {element.quantity * element.item.price}$
                                </td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            removeFromCart(element.item.id)
                                        }
                                        variant="primary"
                                    >
                                        <FontAwesomeIcon
                                            className="TrashAlt"
                                            icon="trash-alt"
                                        />
                                    </Button>
                                </td>
                            </div>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <h5>
                                <Col className="d-flex justify-content-between align-items-center">
                                    <h2 className="total">
                                        Total:{" "}
                                        {cart.reduce(
                                            (acc, element) =>
                                                element.item.price *
                                                    element.quantity +
                                                acc,
                                            0
                                        )}
                                    </h2>
                                    <Button
                                        className="vaciar"
                                        onClick={() => clearCart()}
                                        variant="primary"
                                    >
                                        Vaciar Carrito
                                    </Button>
                                </Col>
                            </h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <Link to="/ItemListContainer">
                                    <button className="btnSeguir">
                                        Seguir Comprando{" "}
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) : (
        <div className="containerCart">
            <Button as={Link} to="/ItemListContainer" className="retorno">
                No Hay productos, Compra algo en la Tienda
            </Button>
        </div>
    );
};

export default Cart;
