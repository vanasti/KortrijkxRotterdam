import { Form, redirect, useLoaderData } from "react-router-dom";
import { getPreset, submitSticker } from "../js/stickers";
import PresetImage from "../components/elements/PresetImage";
import StickerValues from "../components/text/StickerValues";
import Categorie from "../components/text/Categorie";
import { getAnswers } from "../js/questions";

export const action = ({ params }) => {
    console.log('result gone');
    const numParam = Number(params.questionId);
    if (numParam < 3) {
        return redirect(`/question/${numParam + 1}`);
    } else {
        submitSticker();
        return redirect('/fullResult');
        
    }
}

export const loader = async ({params}) => {
    const currentSticker = JSON.parse(localStorage.getItem("settings"));
    
    let fullSticker = true;
    currentSticker.map((sticker) => {
        if (sticker == null) {
            fullSticker = false;
        }
    })
    const presetSticker = await getPreset(params.questionId, currentSticker)
    const answers = await getAnswers(params.questionId);
    console.log(answers);
    const userAnswer = currentSticker[params.questionId - 1];
    const textAnswer = answers[userAnswer - 1].answers;
    const questionId = params.questionId;
    return { fullSticker, presetSticker, textAnswer, questionId };
}

const Result = () => {
    const { fullSticker, presetSticker, textAnswer, questionId } = useLoaderData();    
    let presetImage;
    if (presetSticker && presetSticker.stickerImage[0]) {
        presetImage = presetSticker.stickerImage[0].url;
    }
    let extraContent;
    if (questionId == 1) {
        extraContent = "Dit is jouw vorm van de sticker. Bij de volgende vraag zal jij een geheim patroon krijgen op basis van jouw antwoord!"
    } else if (questionId == 2) {
        extraContent = 'Wat een uniek patroon voor jouw sticker! Maar er mist nog kleur! Voeg dit toe a.d.h.v. het beantwoorden van de volgende vraag!'
    } else {
        extraContent = "Jouw sticker is klaar om geprint te worden!"
    }

    return (
        <>
            {!fullSticker ? (
                <Categorie
                content={`JIJ KOOS VOOR '${textAnswer}'`}
                icon={false}
            />
            ) : (
                <Categorie
                content="WOW, WAT EEN MENING!"
                icon={false}
            />)}  
            
            <PresetImage
                preset={{ image: presetImage, sticker: presetSticker}}
            />
            <p className="explain__text result__text">{extraContent}</p>
            {!fullSticker ? (
                < Form method="post">
                    <button method="post">Volgende vraag</button>
                </Form >
            ) : (
                <>
                    < Form method="post">
                        <button method="post">Print my sticker</button>
                    </Form >
                </>)}       
        </>
    )
}

export default Result;