import { NavLink } from "react-router-dom";
import Quote from "../components/Quote";
import Button from "../components/Button";
import Theme from "../components/Theme";
import ScrollCta from "../components/ScrollCta";
import BodyCopy from "../components/BodyCopy";
const Home = () => {
    return (
        <>
            <div className="header">
                <Quote lineOne="Maak een sticker" lineTwo="Met jouw" lineThree="Eigen mening" />
                <canvas></canvas>
                <Theme theme="Muziek" />
                <Button text="Ik wil mijn sticker maken" />
                <ScrollCta />
            </div>
            <div className="section">
                <img src="" alt="Budabrug" />
                <BodyCopy title="Wat is K'Leef" copy="Aan de hand van invasies die 2 maand duren vragen wij aan jongeren om hun mening rond deze topics te uiten. Maar dit willen we doen op een leuke manier!" secondcopy="Creëer per invasie jouw unieke sticker door het beantwoorden van onze vragen. Zo zal jij samen met andere jongeren de stad Kortrijk weer een jonge geest inblazen!" />
            </div>
            <div className="section section--left">
                <BodyCopy title="Hoe werkt het" copy="Een invasie bestaat uit 3 vragen. Elk beslissen ze de vorm, het patroon en de kleurschakering. Met het beantwoorden van deze vragen ontwikkel je een sticker geïllustreerd door een lokale artiest in Kortrijk." secondcopy="Wil jij er ook eentje maken?" />
                {/* <div>
                    <Navlink to={"stickercreation"}>
                        <Button text="Laten we mijn sticker maken" />
                    </Navlink>
                </div> */}
            </div>
        </>
    );
}

export default Home;