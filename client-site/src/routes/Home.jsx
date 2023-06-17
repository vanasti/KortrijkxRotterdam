import Quote from "../components/Quote";
import Button from "../components/Button";
import ScrollCta from "../components/ScrollCta";
import BodyCopy from "../components/BodyCopy";
import SecretLabel from "../components/SecretLabel";
import Canvas from "../components/Canvas";
import { useLoaderData } from "react-router";
import { getLastVideo, getStickers, userToPreset } from "../js/stickers";


export const loader = async () => {
    const userStickers = await getStickers();
    const stickerImages = await userToPreset(userStickers);
    const videoUrl = await getLastVideo();
    return { stickerImages, videoUrl }
}

const Home = () => {
    const { stickerImages, videoUrl } = useLoaderData();
    return (
        <>
            <div className="header">
                <div className="container__header">
                    <div className="container__subheader">
                        <Quote className="quote" lineOne="Maak een sticker" lineTwo="Met jouw" lineThree="Eigen mening" />
                        <div className="stickerwall">
                            <Canvas stickers={stickerImages} />
                        </div>
                    </div>
                    <Button text="Ik wil mijn sticker maken" link="stickercreation" />
                </div>
                <ScrollCta text="Hoe werkt het?" />
            </div>
            <div className="section section--blue">
                <picture>
                    <source media="(min-width:650px)" srcSet="/desktop/bridge.png" />
                    <img src="/desktop/bridge.png" alt="BudaBrug" />
                </picture>
                <BodyCopy title="Wat is K'Leef" copy="Aan de hand van invasies die 2 maand duren vragen wij aan jongeren om hun mening rond deze topics te uiten. Maar dit willen we doen op een leuke manier!" secondcopy="Creëer per invasie jouw unieke sticker door het beantwoorden van onze vragen. Zo zal jij samen met andere jongeren de stad Kortrijk weer een jonge geest inblazen!" />
            </div>
            <div className="section section--dark">
                <div className="block__dark">
                    <BodyCopy title="Hoe werkt het" copy="Een invasie bestaat uit 3 vragen. Elk beslissen ze de vorm, het patroon en de kleurschakering. Met het beantwoorden van deze vragen ontwikkel je een sticker geïllustreerd door een lokale artiest in Kortrijk." secondcopy="Wil jij er ook eentje maken?" />
                    <div>
                        <Button text="Laten we mijn sticker maken" link="stickercreation" />
                    </div>
                   
                </div>
                <div className="video">
                    <video autoPlay controls muted loop className="video__project" src={videoUrl}></video>
                </div>
                <SecretLabel title="Stick it" copy="Plak de sticker op de Buda-brug en bekijk de looks van de andere stickers! Iedereen is uniek, maar samen zijn jullie Kortrijk." />
            </div>
        </>
    );
}

export default Home;