//* IMPORTAMOS COMPONENTES DE REACT
import React, { useState, useContext } from "react";

//* IMPORTAMOS LOS ESTILOS
import "./Checkout.css";

//* IMPORTAMOS FORMULARIO DE REACT BOOTSTRAP
import { Form } from "react-bootstrap";

//* IMPORTAMOS LAS FUNCIONES DEL CARTCONTEXT
import { CartContext } from "../../context/CartContext";

//* IMPORTAMOS EL API DE FIREBASE
import { getFirestore } from "../../firebase/index";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//* IMPORTAMOS LOS COMPONENTES LINK DE REACT-ROUTER
import { Link } from "react-router-dom";

//** */ EXPORTAMOS EL COMPONENTE CHECKOUT
const Checkout = () => {
    const { cart, cartNumber } = useContext(CartContext);

    const [customerInfo, setCustomerInfo] = useState({
        name: null,
        lastname: null,
        email: null,
        phone: null,
    });

    //* DEFINIMOS LAS VARIABLES QUE VAMOS A NECESITAR DEL USUARIO
    const { name, lastname, email, phone } = customerInfo;

    const [order, setOrder] = useState(false);

    const required = !(name && lastname && email && phone);

    //* CAPTURAMOS ELOS EVENTOS DEL FORMULARIO
    const handleChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            [event.target.name]: event.target.value,
        });
    };

    //* DEFINIMOS LA FUNCION PARA TERMINAR LA COMPRA Y ENVIAR LOS DATOS
    const handleFinishPurchase = () => {
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

        //* CREAMOS LA NUEVA ORDEN
        const newOrder = {
            buyer: {
                name,
                lastname,
                phone,
                email,
            },
            items: infoCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartNumber(),
        };

        orders
            .add(newOrder)
            .then((response) => {
                cart.forEach(({ item, quantity }) => {
                    const docRef = db.collection("items").doc(item.id);
                    batch.update(docRef, { stock: item.stock - quantity });
                });
                batch.commit();
            })
            .catch((error) => console.log(error))
            .finally(setOrder(true));
    };

    return (
        <div>
            <h4 className="tituloForma">Ingresa tus datos</h4>
            <div className="contenedorForma">
                <form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="labels">Nombre</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="labels">Apellido</Form.Label>
                        <Form.Control
                            name="lastname"
                            type="text"
                            placeholder="lastname"
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
                    {order ? (
                        <Link to="/ItemlistContainer">
                            <button className="btnBack">
                                Compra Exitosa, regresar a la tienda.
                            </button>
                        </Link>
                    ) : (
                        <button
                            disabled={required}
                            variant="primary"
                            onClick={handleFinishPurchase}
                            className="btnCheckout"
                        >
                            Finalizar Compra{" "}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Checkout;
