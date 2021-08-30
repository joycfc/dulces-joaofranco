import React from "react";

//* IMPORTAMOS LOS ICONOS DE FONT-AWESOME
import "./components/FontAwesomeIcons/FontAwesomeIcons";

//* IMPORTAMOS EL CARTPROVIDER
import { CartProvider } from "./context/CartContext";

//* IMPORTAMOS EL ROUTER PARA LA NAVEGACION
import Router from "./Router/Router";

//** */ FUNCION APP QUE VA A CONTENER TODOS LOS COMPONENTES

function App() {
    return (
        <>
            <CartProvider>
                <Router />
            </CartProvider>
        </>
    );
}

export default App;
