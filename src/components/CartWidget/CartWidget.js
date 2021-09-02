import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { cart, cartNumber } = useContext(CartContext);

    return (
        cart.length === 0 || (
            <div>
                <Link to="/cart">
                    <div>
                        <FontAwesomeIcon
                            className="ShoppingBasket iconito"
                            icon="shopping-basket"
                        />
                        <span className="total">{cartNumber()}</span>
                        
                    </div>
                </Link>
            </div>
        )
    );
};
