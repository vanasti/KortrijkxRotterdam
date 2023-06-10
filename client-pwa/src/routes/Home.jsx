import { useLoaderData } from "react-router";
import { getStickers } from "../js/stickers";
import Sticker from "../components/elements/Sticker";

export const loader = async () => {
    const userStickers = await getStickers();
    return { userStickers };
}

const Home = () => {
    const { userStickers } = useLoaderData();
    console.log(userStickers);
    return (
        <>
            <p>Home</p>
            <ul>
                
                {userStickers.map((sticker) => (
                    <li key={sticker.id}>
                        <Sticker
                            settings={sticker}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;
