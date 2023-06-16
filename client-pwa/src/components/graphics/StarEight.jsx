const StarEight = ({color}) => {
    return (
        <img className={color == "orange" ? 'statement__star' : ""} src={color == "black" ? "/graphics/starEight.svg" : "/graphics/starEightOrange.svg" }></img>
    )
}

export default StarEight;
