// src/app/projects/python/simures/page.jsx
import React from 'react';

import Introduction from './Components/Introduction';
import Download from './Components/Download';





export const metadata = {
    title: 'SimuRES | Rodolfo Casan',
    description: "SimuRES es una herramienta multiplataforma (Linux) diseñada para modificar y simular resoluciones de pantalla mediante escalado, ofreciendo tanto una interfaz gráfica intuitiva como una potente línea de comandos.",
    keywords: ["rodolfocasan", "rodolfocasan simures", "simures", "@rodolfocasan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: "https://raw.githubusercontent.com/rodolfocasan/simures/main/Storage/Icons/favicon_01.png",
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
