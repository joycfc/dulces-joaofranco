import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { NavbarB } from "../components/Navbar/Navbar";
import Contactos from "../components/pages/contactos";
import Home from "../components/pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <NavbarB />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/ItemListContainer">
                    <ItemListContainer />
                </Route>
                <Route path="/item/:productoId">
                    <ItemDetailContainer />
                </Route>
                <Route path="/Contactos">
                    <Contactos />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
