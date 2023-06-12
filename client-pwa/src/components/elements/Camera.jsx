const Camera = ({ videoSource }) => {
    return (
        <>
            {videoSource ? (
                <video autoPlay ref={videoSource}></video>
            ) : "No video available"
            }
        </>
    )
}

export default Camera;