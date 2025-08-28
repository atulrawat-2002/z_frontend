import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage () {
    return (
        <div>
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <Awards />
            <OpenAccount />
        </div>
    )
}


export default HomePage;