import { Form, redirect, useLoaderData } from "react-router-dom";
import { getQuestion } from "../js/questions";
import { useState } from "react";
import Categorie from "../components/text/Categorie";
import AnswerCollection from "../components/containers/AnswerCollection";
import Slider from "../components/elements/Slider";

export const action = async ({ request, params }) => {
    let formData = await request.formData();
    const { selectedValue } = Object.fromEntries(formData);
    let currentSettings = JSON.parse(localStorage.getItem('settings'));
    if (!currentSettings) currentSettings = new Array(3);
    currentSettings[params.questionId - 1] = selectedValue;
    localStorage.setItem("settings", JSON.stringify(currentSettings));
    return redirect('result');
}

export const loader = async ({params}) => {
    const question = await getQuestion(params.questionId);
    let categorie;
    if (params.questionId == 1) {
        categorie = "Vorm";
    } else if (params.questionId == 2) { 
        categorie = "Patroon";
    }else if (params.questionId == 3) { 
        categorie = "Kleur";
    }
    return { question, categorie };
}

const Question = () => {
    const { question, categorie } = useLoaderData();
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
            <Categorie
                    content={categorie}
            />
            <h2>{question.content}</h2>
            {!sliderNeeded ? (
            <>
                <AnswerCollection
                    answers={answers}
                    selectedAnswer={selectedAnswer}
                    onTouch={handleAnswerTap}
                />
            </>
        ) : (<>
                <Slider
                    onChange={handleSliderInput}
                    max={4}
                    answer={selectedAnswer}
                />
        </>)}
            <Form method="post" >
                <input type="hidden" name="selectedValue" value={selectedAnswer} />
                <button disabled={!canSubmit ?? true} type="submit">Submit</button>
            </Form>
        </>
    )
}

export default Question;