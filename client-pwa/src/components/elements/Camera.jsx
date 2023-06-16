const Camera = ({ videoSource }) => {
    return (
        <>
            {videoSource ? (
                <video className="video__camera" autoPlay ref={videoSource}></video>
            ) : "No video available"
            }
        </>
    )
}

export default Camera;