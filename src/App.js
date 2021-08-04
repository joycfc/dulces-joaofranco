import { NavbarB } from "./components/Navbar/Navbar";
import "./components/FontAwesomeIcons/FontAwesomeIcons";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavbarB />
      <ItemListContainer saludos="Bienvenidos!!!" contenido="Aqui van productos"/>
    </>
  );
}

export default App;
