// src/app/page.js
import React from "react";

import Welcome from "./HOME/Welcome";
import Stats from "./HOME/Stats";





export default function Home() {
  return (
    <React.Fragment>
      <Welcome />
      <Stats />
    </React.Fragment>
  );
}
