// src/app/projects/python/flask-rm/page.jsx
import React from 'react';

import Introduction from './Components/Introduction';
import Download from './Components/Download';





export const metadata = {
    title: 'Flask RM | Rodolfo Casan',
    description: "Un servidor web desarrollado en Python que proporciona un monitor de sistema en tiempo real mediante WebSocket. Permite visualizar el consumo de recursos de tu PC desde cualquier dispositivo conectado a la misma red.",
    keywords: ["rodolfocasan", "rodolfocasan flask", "rodolfocasan flask resources monitor", "@rodolfocasan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: "https://raw.githubusercontent.com/rodolfocasan/flask-resources-monitor/main/web/favicon.svg",
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
