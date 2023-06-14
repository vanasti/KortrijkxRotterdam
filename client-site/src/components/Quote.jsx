import Star from '../assets/desktop/Star.svg'
const Quote = (prop) => {
    return (
        <div className="quote">
            <h2 className="title__blue">{prop.lineOne}</h2>
            <div className='title title--special'>
                <h2 className="title__orange">{prop.lineTwo}</h2>
            </div>
            <h2 className="title__white">{prop.lineThree}</h2>
            <p>op onze vragen</p>
        </div>
    );
}

export default Quote;