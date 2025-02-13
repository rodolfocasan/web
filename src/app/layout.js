// src/app/layout.js
import "./globals.css";

import Navegation from "./Navegation";

import Data from "./constants.json";





export const metadata = {
    title: 'Inicio | Rodolfo Casan',
    description: "Bienvenido a mi sitio web, soy Rodolfo Casan.",
    keywords: ["rodolfocasan", "rodolfocasan inicio", "rodolfocasan home", "@rodolfocasan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.vercel.app' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: Data.favicon,
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navegation />
        {children}
      </body>
    </html>
  );
}
