import Sticker from "../elements/Sticker";

const StickerWall = ({userStickers}) => {
    return (
        userStickers.map((sticker) => (
                <li key={sticker.id}>
                    <Sticker
                        settings={sticker}
                    />
                </li>
        ))
    )
}

export default StickerWall;