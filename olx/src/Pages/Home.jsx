import React from "react";
import Navbar from "../Components/Navbar";
//import NavbarBeforeLogin from "../Components/NavbarBeforeLogin";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";

function Home() {
  const login = false;
  return <div>{login ? <NavbarAfterLogin /> : <Navbar />}</div>;
}

export default Home;
