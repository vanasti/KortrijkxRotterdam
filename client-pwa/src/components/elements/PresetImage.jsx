const PresetImage = ({ preset:{image, sticker} }) => {
    return (
        <>
            {image && sticker ? (
                    <img className="preset-image"src={image}></img>
                ):<p >Something went wrong while loading this preset..</p>}
        </>
    )
}

export default PresetImage;