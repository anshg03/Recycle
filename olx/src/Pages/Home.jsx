import React from "react";
import NavbarBeforeLogin from "../Components/NavbarBeforeLogin";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";

function Home() {
    const login = false;
    return (
        <div>
            {login ? (<NavbarAfterLogin />) : (<NavbarBeforeLogin />)}


        </div>
    )
}

export default Home;