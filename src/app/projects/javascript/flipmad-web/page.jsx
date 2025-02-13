import React from 'react'

import Introduction from './Components/Introduction'
import Play from './Components/Play';





export const metadata = {
    title: 'FlipMAD Web | Rodolfo Casan',
    description: "¡Pon a prueba tu memoria y reflejos en este emocionante juego de cartas!",
    keywords: ["rodolfocasan", "rodolfocasan flipmad", "rodolfocasan flipmad web", "@rodolfocasan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: "https://raw.githubusercontent.com/rodolfocasan/flipmad-multiplatform/main/dist/android-chrome-512x512.png",
    },
};
export default function page() {
    return (
        <React.Fragment>
            <Introduction />
            <Play />
        </React.Fragment>
    )
}
