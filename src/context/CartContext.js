//* IMPORTAMOS COMPONENTES DE REACT
import React, { createContext, useState } from "react";

//* EXPORTAMOS EL CARTCONTEXT PARA USARLO EN EL ITEMDETAIL
export const CartContext = createContext([]);

//* EXPORTAMOS EL CartProvider PARA USARLO EN APP
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const cartNumber = () =>
        cart.reduce((actual, current) => actual + current.quantity, 0);

    const clearCart = () => {
        setCart([]);
    };

    const getItem = (id) => cart.find((element) => element.item.id === id);

    const subTotal = (id, ammount) => {
        if (getItem(id).quantity > ammount) {
            setCart(
                cart.map((element) => {
                    if (element.item.id === id) element.quantity -= ammount;
                    return element;
                })
            );
        } else {
            removeFromCart(id);
        }
    };

    const total = (id, qua, stock) => {
        if (qua <= stock) {
            setCart(
                cart.map((element) => {
                    if (element.item.id === id)
                        element.quantity = element.quantity + 1;
                    return element;
                })
            );
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((element) => element.item.id !== id));
    };

    const addToCart = (item, quantity) => {
        const isInCart = (id) => cart.some((element) => element.item.id === id);
        if (isInCart(item.id)) {
            setCart(
                cart.map((element) => {
                    if (element.item.id === item.id)
                        element.quantity = element.quantity + quantity;
                    return element;
                })
            );
        } else {
            setCart([...cart, { item, quantity }]);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                clearCart,
                addToCart,
                cartNumber,
                total,
                subTotal,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
