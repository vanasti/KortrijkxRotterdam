const StickerValues = ({currentSticker}) => {
    return (
        <div className="sticker__icons">
            {currentSticker.length ? (
                    currentSticker.map((sticker, index) => (
                        <li key={index}>
                            <div className="sticker__icon">
                                <p>{sticker ? sticker : "?"}</p>
                            </div>
                        </li>
                    ))
                ) : ""}
        </div>
    )
}

export default StickerValues;
