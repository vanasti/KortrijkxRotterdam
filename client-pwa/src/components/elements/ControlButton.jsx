const ControlButton = ({onTouch, type,className}) => {
    return (
        <>
            <div 
                className={className}
                onTouchStart={onTouch}
            >
                <p>{type}</p>
                {type !== "start recording" ? (
                    <div className="stop__icon"></div>
                ): ""}
            </div>
        </>
    )
}

export default ControlButton;