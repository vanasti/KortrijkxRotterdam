const AnswerOption = ({ answer: { answer }, onTouchStart, index, selected }) => {
    return (
        <div onTouchStart={onTouchStart}>
            <p id={index}>{answer}{selected ?? ' IS not SELECTED'} </p>
            
        </div>
    )
}

export default AnswerOption;