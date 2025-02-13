// src/app/projects/python/chrome-session-manager/page.jsx
import React from 'react';

import Introduction from './Components/Introduction';
import Download from './Components/Download';





export const metadata = {
    title: 'Chrome Session Manager | Rodolfo Casan',
    description: "Gestiona múltiples sesiones paralelas de Google Chrome con una interfaz moderna, intuitiva y potente.",
    keywords: ["rodolfocasan", "rodolfocasan chrome", "chrome session manager", "rodolfocasan chrome session manager", "@rodolfocasan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/main/Storage/Settings/icons/favicon.png",
    },
};
export default function page() {
    return (
        <React.Fragment>
            <Introduction />
            <Download />
        </React.Fragment>
    )
}
