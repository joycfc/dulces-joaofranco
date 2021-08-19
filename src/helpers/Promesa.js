//* IMPORTAMOS LOS PRODCTOS PARA PASARLOS CON UNA PROMESA
import { Productos } from "../components/productos/Productos";


//* CREAMOS UNA PROMESA PARA PASARLA AAL ITEMLISTCONTAINER
export const ProductData = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos);
        }, 2000);
    });
    
    return promise;
};

