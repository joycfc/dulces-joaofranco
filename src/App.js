import React from "react";

//* IMPORTAMOS LOS ICONOS DE FONT-AWESOME
import "./components/FontAwesomeIcons/FontAwesomeIcons";

//* IMPORTAMOS EL CONTENEDOR DONDE VAN A ESTAR TODOS LOS PRODUCTOS
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//* IMPORTAMOS EL ROUTER PARA LA NAVEGACION
import Router from "./Router/Router";

//** */ FUNCION APP QUE VA A CONTENER TODOS LOS COMPONENTES

function App() {
    return (
        <>
            <Router />
        </>
    );
}

export default App;
