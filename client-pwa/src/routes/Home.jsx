import { redirect, useLoaderData } from "react-router";
import { getStickers, userToPreset } from "../js/stickers";
import { Form } from "react-router-dom";
import Statement from "../components/text/Statement";
import StickerWall from "../components/containers/StickerWall";

export const loader = async () => {
    localStorage.clear();
    const userStickers = await getStickers();
    const stickerImages = await userToPreset(userStickers);
    return { stickerImages };
}


export const action = () => {
    return redirect("/explain");
}

const Home = () => {
    const { stickerImages } = useLoaderData();
    console.log(stickerImages)
    return (
        <>
            
            <Statement
                variant={true}
                lineOne={{
                    partOne: {
                        content: "MAAK",
                        big: false
                    }, 
                    partTwo: {
                        content: "EEN",
                        big: false
                    },
                }}
                lineTwo={{
                    partOne: {
                        content: "STICKER",
                        big: true
                    }, 
                    partTwo: {
                        content: "MET",
                        big: false
                    },
                }}
                lineThree={{
                    partOne: {
                        content: "JOUW",
                        big: false
                    }, 
                    partTwo: {
                        content: "MENING",
                        big: true
                    },
                }}
            />
            <StickerWall stickers={stickerImages} />
            <Form className="button__container" method="post">
                <button className="button" type="submit">Maak een sticker!</button>
            </Form>
        </>
    )
}

export default Home;
