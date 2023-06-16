const Slider = ({ onChange, max, answer }) => {
    console.log(answer);
    return (
        <>
            <input type="range" min="1" max={max} onChange={onChange} value={answer} />
            <div className="slider__explain">
                <p>Niet eens</p>
                <p>Neutraal</p>
                <p>Wel eens</p>
            </div>
        </>
    )
}

export default Slider;