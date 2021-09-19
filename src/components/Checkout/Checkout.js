import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useHistory } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const { cart, setCart, calcTotal } = useContext(CartContext);
    const [customerInfo, setCustomerInfo] = useState({
        name: null,
        lastname: null,
        email: null,
        phone: null,
    });
    const [order, setOrder] = useState(false);

    const { name, lastname, email, phone } = customerInfo;
    const required = !(name && lastname && email && phone);

    const history = useHistory();

    const handleChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            [event.target.name]: event.target.value,
        });
    };

    const handleFinishPurchase = () => {
        setOrder(true);
        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        const infoCart = cart.map(({ item, quantity }) => ({
            items: {
                id: item.id,
                title: item.title,
                price: item.price,
            },
            quantity,
        }));

        const newOrder = {
            buyer: {
                name,
                lastname,
                phone,
                email,
            },
            items: infoCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: calcTotal(),
        };

        orders
            .add(newOrder)
            .then((response) => {
                console.log("Productos a Firebase", response);
                cart.forEach(({ item, quantity }) => {
                    const docRef = db.collection("items").doc(item.id);
                    batch.update(docRef, { stock: item.stock - quantity });
                });
                batch.commit();
                setCart([]);
                history.push(`/orden/${response.id}`);
                setOrder(false);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="contenedorForma">
            <div className="forma">
                <Form>
                    <h2 className="tituloForma">Ingresa tus Datos</h2>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="labels">Nombre</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label className="labels">Apellido</Form.Label>
                        <Form.Control
                            name="lastname"
                            type="text"
                            placeholder="Apellido"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="labels">
                            Correo electrónico
                        </Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="labels">Teléfono</Form.Label>
                        <Form.Control
                            name="phone"
                            type="telephone"
                            placeholder="Teléfono"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        className="btnNormal"
                        disabled={required}
                        variant="primary"
                        onClick={handleFinishPurchase}
                    >
                        Realizar tu pedido
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;
