import AnswerOption from "../elements/AnswerOption";

const AnswerCollection = ({ answers, selectedAnswer, onTouch}) => {
    return (
        <ul className="answers__container">
            {answers.map((answer, index) => (
                <li className="answer__container" key={index}>
                    <AnswerOption
                        answer={answer}
                        selected={(index + 1) == selectedAnswer ? true : null}
                        index={index + 1}
                        onTouchStart={onTouch}
                    />
                </li>
            ))}
        </ul>
    )
}

export default AnswerCollection;