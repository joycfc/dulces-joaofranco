// export let Productos = [
//     {
//         imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
//         titulo: "Producto 1",
//         precio: 1000,
//         id: "001",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "postres",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         titulo: "Producto 2",
//         precio: 3000,
//         id: "002",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "postres",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1302&q=80",
//         titulo: "Producto 3",
//         precio: 2000,
//         id: "003",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "postres",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1599785209615-a35f883d93c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
//         titulo: "Producto 4",
//         precio: 4000,
//         id: "004",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "postres",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         titulo: "Producto 5",
//         precio: 2000,
//         id: "005",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "postres",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1615837197154-2e801f4bd294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
//         titulo: "Producto 6",
//         precio: 1000,
//         id: "006",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "regalos",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1516919549054-e08258825f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         titulo: "Producto 7",
//         precio: 3000,
//         id: "007",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "regalos",
//         stock:5,
//     },
//     {
//         imagen: "https://images.unsplash.com/photo-1519869325930-281384150729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
//         titulo: "Producto 8",
//         precio: 2000,
//         id: "008",
//         info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, corporis quaerat maxime optio quas nisi nam reiciendis vitae eos reprehenderit laboriosam.",
//         category: "regalos",
//         stock:5,
//     },
// ];

import { getFirestore } from "../../firebase/index";

const firestore = getFirestore();
const collectCategories = firestore.collection("categories");
const collectProductos = firestore.collection("items");
const collectSingleProduct = (id) => {
    return firestore.collection("items").doc(id).get();
};

// Retorna objeto 'product'
export const getProductById = (id) => {
    return collectSingleProduct(id).then((res) => {
        if (res) return res;
        throw new Error(`No '${id}' item results.`);
    });
};

export const listCallback = (res) =>
    res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
