import { redirect, useLoaderData } from "react-router";
import { getStickers } from "../js/stickers";
import { Form } from "react-router-dom";
import Statement from "../components/text/Statement";
import StickerWall from "../components/containers/StickerWall";

export const loader = async () => {
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
                content="Maak een sticker met jouw mening!"
            />
            <ul>
            <StickerWall
                userStickers={userStickers}
            />
            </ul>
            <Form method="post">
                <button type="submit">Create a sticker</button>
            </Form>
        </>
    )
}

export default Home;
