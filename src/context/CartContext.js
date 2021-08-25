//* IMPORTAMOS COMPONENTES DE REACT
import React, { createContext, useState } from "react";

//* EXPORTAMOS EL CARTCONTEXT PARA USARLO EN EL ITEMDETAIL
export const CartContext = createContext([]);

//* EXPORTAMOS EL CartProvider PARA USARLO EN APP
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = id => cart.some(element => element.id === id);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const cartMapped = cart.map(element => {
                return { ...element, quantity: element.quantity + quantity };
            });
            setCart(cartMapped);
            console.log("Cart mapeado", cartMapped)
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    console.log("Cart", cart)

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }} >
            {children}
        </CartContext.Provider>
    )
}