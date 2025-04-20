import React from "react";
import Navigation from "../components/Navigation";
import Disclaimer from "../components/Disclaimer";

function Home(){
    return(
        <div>
            <Disclaimer/>
            <Navigation />
            <p>Welcome to the home page!</p>
        </div>
    );  
}

export default Home;