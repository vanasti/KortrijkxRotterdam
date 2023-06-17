const PresetImage = ({ preset:{image, sticker} }) => {
    return (
        <>
            {image && sticker ? (
                    <img className="preset__image"src={image}></img>
                ):<div className="error__bubble"><p>?</p><p>Something went wrong while loading this sticker..</p></div>}
        </>
    )
}

export default PresetImage;