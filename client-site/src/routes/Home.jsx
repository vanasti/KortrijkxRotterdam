import { Link } from "react-router-dom";
import Quote from "../components/Quote";
import Button from "../components/Button";
import ScrollCta from "../components/ScrollCta";
import BodyCopy from "../components/BodyCopy";
import SecretLabel from "../components/SecretLabel";
const Home = () => {
    return (
        <>
            <div className="header">
                <div className="container__header">
                    <Quote className="quote" lineOne="Maak een sticker" lineTwo="Met jouw" lineThree="Eigen mening" />
                    <canvas></canvas>
                    <Button text="Ik wil mijn sticker maken" link="stickercreation" />
                </div>
                <ScrollCta text="Hoe werkt het?" />
            </div>
            <div className="section">
                <img src="" alt="Budabrug" />
                <BodyCopy title="Wat is K'Leef" copy="Aan de hand van invasies die 2 maand duren vragen wij aan jongeren om hun mening rond deze topics te uiten. Maar dit willen we doen op een leuke manier!" secondcopy="Creëer per invasie jouw unieke sticker door het beantwoorden van onze vragen. Zo zal jij samen met andere jongeren de stad Kortrijk weer een jonge geest inblazen!" />
            </div>
            <div className="section section--left">
                <div>
                    <BodyCopy title="Hoe werkt het" copy="Een invasie bestaat uit 3 vragen. Elk beslissen ze de vorm, het patroon en de kleurschakering. Met het beantwoorden van deze vragen ontwikkel je een sticker geïllustreerd door een lokale artiest in Kortrijk." secondcopy="Wil jij er ook eentje maken?" />
                    <div>
                        <Button text="Laten we mijn sticker maken" link="stickercreation" />
                    </div>
                </div>
                <SecretLabel title="Stick it" copy="Plak de sticker op de Buda-brug en bekijk de looks van de andere stickers! Iedereen is uniek, maar samen zijn jullie Kortrijk." />
            </div>
        </>
    );
}

export default Home;