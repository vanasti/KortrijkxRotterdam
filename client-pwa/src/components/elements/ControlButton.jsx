const ControlButton = ({onTouch, type}) => {
    return (
        <>
        <div
            onTouchStart={onTouch}
        >
            <p>{type}</p>
        </div>
        </>
    )
}

export default ControlButton;