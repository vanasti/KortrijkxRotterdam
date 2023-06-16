const Quote = ({lineOne, lineTwo, lineThree}) => {
    return (
        <div className="quote">
            <h2 className="title__blue">{lineOne}</h2>
            <h2 className="title__orange">{lineTwo}</h2>
            <h2 className="title__white">{lineThree}</h2>
            <p>op onze vragen</p>
        </div>
    );
}

export default Quote;