import React from "react";
import Navbar from "../Components/Navbar";
//import NavbarBeforeLogin from "../Components/NavbarBeforeLogin";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";
import CardDisplay from "../Components/DisplayCard";
import Carousel from "../Components/Carousel";

function Home() {
  const login = false;
  return (
    <div>
      {login ? <NavbarAfterLogin /> : <Navbar />}
      <CardDisplay name="Sofa" description="this is big" amount="455" />
    </div>
  );
}

export default Home;
