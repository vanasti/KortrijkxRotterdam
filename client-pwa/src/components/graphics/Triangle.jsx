const Triangle = ({orientation}) => {
    return (
        <img className="header__image"src={orientation == 'right' ? "/graphics/triangleRight.svg" : "/graphics/triangleLeft.svg"}></img>
    )
}

export default Triangle;