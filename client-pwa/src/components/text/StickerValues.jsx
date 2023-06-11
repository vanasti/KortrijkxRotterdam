const StickerValues = ({currentSticker}) => {
    return (
        <>
            {currentSticker.length ? (
                    currentSticker.map((sticker, index) => (
                        <li key={index}>{sticker ? sticker : "No value yet"}</li>
                    ))
                ) : ""}
        </>
    )
}

export default StickerValues;
