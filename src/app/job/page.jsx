// src/app/job/page.jsx
import React from 'react'

import Introduction from './Components/Introduction'

import Data from "../constants.json";





export const metadata = {
    title: 'Modalidades de Trabajo | Rodolfo Casan',
    description: "Elige la forma de trabajo que mejor se adapte a tus necesidades y objetivos.",
    keywords: ["rodolfocasan", "rodolfocasan contratar", "rodolfocasan contacto", "rodolfocasan instagram", "rodolfocasan telegram", "rodolfocasan whatsapp"],
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
