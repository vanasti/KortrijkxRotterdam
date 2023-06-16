import StarEight from "../graphics/StarEight";

const Statement = ({ lineOne, lineTwo, lineThree, variant }) => {
    
    return (
        <div className="statement__container">
            {variant ? (
                <>
                    <div className="statement__line">
                        <p className={lineOne.partOne.big ? "blue__text big__text" : "blue__text"}>{lineOne.partOne.content}</p>
                        <p className={lineOne.partTwo.big ? "big__text" : ""}>{lineOne.partTwo.content}</p>
                    </div>
                    <div className="statement__line--middle">
                        <StarEight color="orange" />
                        <div className="statement__line">
                            <p className={lineTwo.partOne.big ? "orange__text big__text" : "orange__text"}>{lineTwo.partOne.content}</p>
                            <p className={lineTwo.partTwo.big ? "orange__text big__text" : "orange__text"}>{lineTwo.partTwo.content}</p>
                        </div>
                        <StarEight color="orange" />
                    </div>
                    <div className="statement__line" >
                        <p className={lineThree.partOne.big ? "big__text" : ""}>{lineThree.partOne.content}</p>
                        <p className={lineThree.partTwo.big ? "blue__text big__text" : "blue__text"}>{lineThree.partTwo.content}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="statement__line">
                        <p className="">{lineOne.partOne.content}</p>
                        <p>{lineOne.partTwo.content}</p>
                    </div>
                    <div className="statement__line--middle">
                        <StarEight color="orange" />
                        <div className="statement__line">
                            <p>{lineTwo.partOne.content}</p>
                            <p>{lineTwo.partTwo.content}</p>
                        </div>
                        <StarEight  color="orange" />
                    </div>
                    <div className="statement__line" >
                        <p>{lineThree.partOne.content}</p>
                        <p>{lineThree.partTwo.content}</p>
                    </div>
                </>
                )}
        
        </div>
    );
}

export default Statement;