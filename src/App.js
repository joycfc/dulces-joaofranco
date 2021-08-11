//* IMPORTAMOS LA BARRA DE NAVEGACION
import { NavbarB } from "./components/Navbar/Navbar";

//* IMPORTAMOS El HERO BANNER
import HeroBanner from "./components/heroBanner/HeroBanner";

//* IMPORTAMOS LOS ICONOS DE FONT-AWESOME
import "./components/FontAwesomeIcons/FontAwesomeIcons";

//* IMPORTAMOS EL CONTENEDOR DONDE VAN A ESTAR TODOS LOS PRODUCTOS
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//** */ FUNCION APP QUE VA A CONTENER TODOS LOS COMPONENTES

function App() {
    return (
        <>
            {/* *BARRA DE NAVEGACION */}
            <NavbarB />

            {/* BANNER */}
            <HeroBanner saludos="Tienda de Dulces" />
            {/* CONTENEDOR DE ITEMS */}

            <ItemListContainer />
        </>
    );
}

export default App;
