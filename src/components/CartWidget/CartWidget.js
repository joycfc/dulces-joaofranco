import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Navbar/Navbarstyles.css";

export const CartWidget = () => {
    return (
        <div>
            <a className="enlaces">
                <FontAwesomeIcon
                    className="ShoppingBasket"
                    icon="shopping-basket"
                />
            </a>{" "}
        </div>
    );
};
