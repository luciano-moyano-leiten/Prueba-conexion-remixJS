// Necesito conectar rutas y archivos en una misma pagina

import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export let loader = async () => {
    return { message: "Hola, bienvenido a la página de prueba!" };
};

export let action = async () => {
    return redirect("/listPrueba/detail/listPrueba1");
};

interface LoaderData {
    message: string;
}

export default function ListPrueba() {
    let data = useLoaderData<LoaderData>();
    return (
        <div>
            <h1>{data.message}</h1>
            <form method="post">
                <button type="submit">Ir a detalle</button>
            </form>
            <Outlet/>
        </div>
    );
}