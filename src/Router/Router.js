import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/Navbar/NavBar";
import Home from "../components/pages/Home";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

const Router = () => {
    return (
        <BrowserRouter>
            {/* <NavbarB /> */}
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/ItemListContainer"
                    component={ItemListContainer}
                />
                <Route
                    path="/Category/:categoryId"
                    component={ItemListContainer}
                />
                <Route path="/item/:itemId" component={ItemDetailContainer} />
                <Route path="/Cart" component={Cart} />
                <Route path="/Checkout" component={Checkout} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
