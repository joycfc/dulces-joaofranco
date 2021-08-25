import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <FontAwesomeIcon
                className="ShoppingBasket iconito"
                icon="shopping-basket"
            />
        </Link>
    );
};
