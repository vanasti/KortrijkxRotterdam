const ControlButton = ({onTouch, type,className, onClick}) => {
    return (
        <>
            <div 
                className={className}
                onTouchStart={onTouch}
                onClick={onClick}
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