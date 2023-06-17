import { Form, redirect, useLoaderData } from "react-router-dom";
import { getQuestion } from "../js/questions";
import { useState } from "react";
import Categorie from "../components/text/Categorie";
import AnswerCollection from "../components/containers/AnswerCollection";
import Slider from "../components/elements/Slider";
import Progress from "../components/elements/Progress.jsx";

export const action = async ({ request, params }) => {
    let formData = await request.formData();
    const { selectedValue } = Object.fromEntries(formData);
    let currentSettings = JSON.parse(localStorage.getItem('settings'));
    if (!currentSettings) currentSettings = new Array(3);
    currentSettings[params.questionId - 1] = selectedValue;
    localStorage.setItem("settings", JSON.stringify(currentSettings));
    return redirect('result');
}

export const loader = async ({ params }) => {
    const questionId = params.questionId
    const question = await getQuestion(params.questionId);
    let categorie;
    let explain;
    if (params.questionId == 1) {
        categorie = "VORM";
        explain = "Deze vraag bepaalt dé geheime vorm van de sticker";
    } else if (params.questionId == 2) { 
        categorie = "PATROON";
        explain = "Deze vraag bepaalt hét geheime patroon voor de sticker";
    }else if (params.questionId == 3) { 
        categorie = "KLEUR";
        explain = "Deze vraag bepaalt een geheim kleurenpalet voor de stickerr";
    }
    return { question, categorie, explain, questionId };
}

const Question = () => {
    const { question, categorie, explain, questionId } = useLoaderData();
    const answers = question.answers;
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    let canSubmit;
    let sliderNeeded = false;
    if (question.number == 3) {
        sliderNeeded = true;        
    }

    if (selectedAnswer == 0) {
        canSubmit = false;
    } else {
        canSubmit = true;
    } 

    const handleAnswerTap = e => {
        setSelectedAnswer(e.target.id);
    }

    const handleSliderInput = e => {
        console.log(e.target.value);
        setSelectedAnswer(e.target.value);       
    }

    return (
        <>  
            <Progress
                questionId={questionId} />
            <Categorie
                content={categorie}
                icon={true}
            />
            <p className="question__extra">{explain}</p>
            {!sliderNeeded ? (
                <>
                    <h2 className="question__content">{question.content}</h2>
                    <AnswerCollection
                        answers={answers}
                        selectedAnswer={selectedAnswer}
                        onTouch={handleAnswerTap}
                    /><div id="myProgress">
  <div id="myBar"></div>
</div>
            </>
            ) : (<>
                    <p className="slider__question">{question.content}</p>
                    <img className="sliert" src='/graphics/sliert.svg'></img>
                    <Slider
                        onChange={handleSliderInput}
                        max={3}
                        answer={selectedAnswer}
                    />
                </>
            )}
            <Form method="post">
                <input type="hidden" name="selectedValue" value={selectedAnswer} />
                <button disabled={!canSubmit ?? true} type="submit">Volgende</button>
            </Form>
        </>
    )
}

export default Question;