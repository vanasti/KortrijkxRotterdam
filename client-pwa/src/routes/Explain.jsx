import { Form, redirect } from "react-router-dom";
import Statement from "../components/text/Statement";
import Balk from "../components/graphics/Balk";

export const action = () => {
    return redirect("/question/1");
}


const Explain = () => {
    return (
        <>
            <img className="detail__image" src="/graphics/eye.svg"></img>
            <img className="detail__image" src="/graphics/sliertTwo.svg"></img>
            <img className="detail__image" src="/graphics/sliertTwo.svg"></img>
            <Statement
                variant={true}
                lineOne={{
                    partOne: {
                        content: "SAMEN",
                        big: true
                    }, 
                    partTwo: {
                        content: "STAAN",
                        big: false
                    },
                }}
                lineTwo={{
                    partOne: {
                        content: "WE",
                        big: false
                    }, 
                    partTwo: {
                        content: "STERKER",
                        big: false
                    },
                }}
                lineThree={{
                    partOne: {
                        content: "DAN",
                        big: false
                    }, 
                    partTwo: {
                        content: "ALLEEN",
                        big: true
                    },
                }}
            />
            <img src="/graphics/sliert.svg"></img>
            <div className="explain__text__container">
                <p className="explain__text">Iedereen heeft een unieke mening, maar samen vorm jij met alle anderen jongeren de toekomst van Kortrijk. Toon aan de hand van jouw sticker hoe jij en andere jongeren denken over jouw stad!</p>
                <Form className="button__container button__container--small" method="post">
                    <button className="button" type="submit">Ik maak een sticker!</button>
                </Form>
            </div>
            <Balk className="explain__balk balk__one" />
            <Balk className="explain__balk balk__two"/>
        </>
    )
}

export default Explain;