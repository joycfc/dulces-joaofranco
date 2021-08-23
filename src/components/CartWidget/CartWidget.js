import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../Navbar/Navbarstyles.css";

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <FontAwesomeIcon
                className="ShoppingBasket enlace"
                icon="shopping-basket"
            />
        </Link>
    );
};
