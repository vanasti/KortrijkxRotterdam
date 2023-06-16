import { redirect, useLoaderData } from "react-router";
import { getStickers } from "../js/stickers";
import { Form } from "react-router-dom";
import Statement from "../components/text/Statement";
import StickerWall from "../components/containers/StickerWall";

export const loader = async () => {
    localStorage.clear();
    const userStickers = await getStickers();
    return { userStickers };
}

export const action = () => {
    console.log("hey");
    return redirect("/explain");
}

const Home = () => {
    const { userStickers } = useLoaderData();
    console.log(userStickers);
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
            <ul>
            <StickerWall
                userStickers={userStickers}
            />
            </ul>
            <Form className="button__container" method="post">
                <button className="button" type="submit">Maak een sticker!</button>
            </Form>
        </>
    )
}

export default Home;
