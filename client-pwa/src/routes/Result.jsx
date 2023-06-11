import { Form, redirect, useLoaderData } from "react-router-dom";
import { getPreset, submitSticker } from "../js/stickers";
import PresetImage from "../components/elements/PresetImage";
import StickerValues from "../components/text/StickerValues";

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
    return { currentSticker, fullSticker, presetSticker };
}

const Result = () => {
    const { currentSticker, fullSticker, presetSticker } = useLoaderData();
    console.log(presetSticker ,currentSticker);
    let presetImage;
    if (presetSticker && presetSticker.stickerImage[0]) {
        presetImage = presetSticker.stickerImage[0].url;
    }
    
    return (
        <>
            <PresetImage
                preset={{ image: presetImage, sticker: presetSticker}}
            />
            <StickerValues
                currentSticker={currentSticker}
            />
            {!fullSticker ? (
                < Form method="post">
                    <button method="post">Next question</button>
                </Form >
            ) : (
                <>
                    <p>Print time!</p>
                        < Form method="post">
                            <button method="post">Print my sticker</button>
                        </Form >
                </>)}       
        </>
    )
}

export default Result;