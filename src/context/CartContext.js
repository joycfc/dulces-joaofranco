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

    const total = (id, qty, stock) => {
        if (qty <= stock) {
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

    const calcTotal = () => {
        return cart.reduce((acc, el) => el.item.price * el.quantity + acc, 0);
    };

    //* EXPORTAMOS LAS FUNCIONES QUE VAMOS A USAR

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
                calcTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
