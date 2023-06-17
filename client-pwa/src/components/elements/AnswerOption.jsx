const AnswerOption = ({ answer: { answer }, onTouchStart, index, selected }) => {
    return (
        <div className={selected ? "answer__option answer__option--selected" : "answer__option "} onTouchStart={onTouchStart}>
            <p className="answer__option__text" id={index}>{answer}</p>
        </div>
    )
}

export default AnswerOption;