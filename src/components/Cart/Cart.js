import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, removeFromCart, subTotal, total } =
        useContext(CartContext);

    return cart.length > 0 ? (
        <div className="containerCart">
            <Table className="contenedorTabla">
                <thead>
                    <tr>
                        <th scope="col">productos </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((element) => (
                        <tr>
                            <div key={element.item.id}>
                                <td>
                                    <img
                                        className="thumbnail"
                                        alt={element.item.titulo}
                                        src={element.item.imagen}
                                    />
                                </td>

                                <td>
                                    <h4>info</h4>
                                    <span>{element.item.info}</span>
                                </td>
                                <td>
                                    <h4>Precio unitario</h4>

                                    <span>{element.item.precio}$</span>
                                </td>

                                <td>
                                    <h4>Agregar o eliminar</h4>

                                    <span>
                                        <Button
                                            onClick={() =>
                                                subTotal(element.item.id, 1)
                                            }
                                        >
                                            -{" "}
                                        </Button>
                                        {element.quantity}{" "}
                                        <Button
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
                                    <h4>subtotal</h4>
                                    {cart.reduce(
                                        (acc, element) =>
                                            element.item.precio *
                                                element.quantity +
                                            acc,
                                        0
                                    )}
                                    $
                                </td>
                                <td>
                                    <h4>Remover producto</h4>

                                    <Button
                                        onClick={() =>
                                            removeFromCart(element.item.id)
                                        }
                                        variant="primary"
                                    >
                                        x
                                    </Button>
                                </td>
                            </div>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <h5>
                                <Col className="d-flex justify-content-between align-items-center">
                                    <h1>
                                        Total:{" "}
                                        {cart.reduce(
                                            (acc, element) =>
                                                element.item.precio *
                                                    element.quantity +
                                                acc,
                                            0
                                        )}
                                    </h1>
                                    <Button
                                        onClick={() => clearCart()}
                                        variant="primary"
                                    >
                                        VACIAR
                                    </Button>
                                </Col>
                            </h5>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) : (
        <div className="containerCart">
            <Button as={Link} to="/ItemListContainer" className="retorno">
                NO HAY PRODUCTOS AGREGADOS. IR A LA TIENDA
            </Button>
        </div>
    );
};

export default Cart;
