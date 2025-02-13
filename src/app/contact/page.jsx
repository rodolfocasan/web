// src/app/contact/page.jsx
import React from 'react';

import Introduction from './Components/Introduction';

import Data from "../constants.json";





export const metadata = {
    title: 'Contacto | Rodolfo Casan',
    description: "Contáctame directamente desde esta sección.",
    keywords: ["rodolfocasan", "rodolfocasan contact", "rodolfocasan contacto", "rodolfocasan instagram", "rodolfocasan telegram", "rodolfocasan whatsapp"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: Data.favicon,
    },
};
export default function page() {
    return (
        <React.Fragment>
            <Introduction />
        </React.Fragment>
    )
}
