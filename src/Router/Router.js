import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { NavbarB } from "../components/Navbar/Navbar";
import Contactos from "../components/pages/contactos";
import Home from "../components/pages/Home";
import Cart from "../components/Cart/Cart";

const Router = () => {
    return (
        <BrowserRouter>
            <NavbarB />
            <Switch>
            <Route exact path="/" component={Home} exact/>
            <Route path="/ItemListContainer" component={ItemListContainer}/>
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:productoId" component={ItemDetailContainer} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Contactos" component={Contactos} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
