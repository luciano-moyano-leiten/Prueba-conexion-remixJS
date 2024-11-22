import { Link, Outlet, redirect } from "@remix-run/react";
import { action as listPruebaAction } from "../listPrueba/route";

interface Contact {
    id: number;
    name: string;
    email: string;
    contact: string;
}

const contacts: Contact[] = [
    { id: 1, name: "John Doe", email: "john@example.com", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "234-567-8901" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", contact: "345-678-9012" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", contact: "456-789-0123" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", contact: "567-890-1234" },
];

export let detailAction = async () => {
    return redirect("/listPrueba/detail/listPrueba1/listPrueba2");
}

export default function ListPruebaDetail() {
    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`listPrueba.detail.${contact.id}.listPrueba2`}>
                            {contact.name} - {contact.email} - {contact.contact}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        
        </div>
    );
}