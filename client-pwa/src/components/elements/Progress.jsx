const Progress = ({ questionId }) => {
    console.log(questionId);
    return (
        <div className="progress__questions">
            {questionId == 1 ? (
                <img src="/graphics/timeLineOne.svg"></img>
            ) : questionId == 2 ? (<img src="/graphics/timeLineTwo.svg"></img>): (<img src="/graphics/timeLineThree.svg"></img>)}
        </div>
    )
}

export default Progress;
