import { json } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

interface Products {
    name: string;
    price: string;
}

const info: Products[] = [ 
    { name: "Cloro", price: "$55" },
    { name: "Desengrasante", price: "$56" },
    { name: "Desinfectante", price: "$65" },
    { name: "Detergente", price: "$85" },
    { name: "Suavizante", price: "$105" },
    { name: "Quita Mancha", price: "$45" },

 ]


export let loader = async () => {
    return json({ info });
};

export default function ListPruebaDetail() {
    return (
        <div>
            <h1>Productos de limpieza</h1>
            <ul>
                {info.map(contact => (
                    <li key={contact.name}>
                        <Link to={`listPrueba.detail.${contact.name}.listPrueba2`}>
                            {contact.name} - {contact.price}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        
        </div>
    );
}