const Slider = ({ onChange, max, answer }) => {
    console.log(answer);
    return (
        <>
            <input type="range" min= "1" max={max} onChange={onChange} value={answer}/>
        </>
    )
}

export default Slider;