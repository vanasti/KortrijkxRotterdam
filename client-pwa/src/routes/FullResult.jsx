import { Form, redirect } from "react-router-dom";
import Statement from "../components/text/Statement";
import Balk from '../components/graphics/Balk.jsx';
export const action = async ({request}) => {
    let formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates.video);
    
    if (updates.video == "video") {
        return redirect('/video');
    } else if (updates.video == "none") {
        localStorage.clear();
        return redirect('/end');
    }
}

const FullResult = () => {
    return (
        <>
            <Statement
                variant={true}
                lineOne={{
                    partOne: {
                        content: "YOUR",
                        big: true
                    }, 
                    partTwo: {
                        content: "STICKER",
                        big: false
                    },
                }}
                lineTwo={{
                    partOne: {
                        content: "IS",
                        big: false
                    }, 
                    partTwo: {
                        content: "ON",
                        big: false
                    },
                }}
                lineThree={{
                    partOne: {
                        content: "THE",
                        big: false
                    }, 
                    partTwo: {
                        content: "WAY",
                        big: true
                    },
                }}
            />
            <p className="print__explain">Terwijl jouw sticker geprint wordt, kan je nog een extra video maken om je mening nog meer te delen!</p>
            <Form method="post">
                <input type="hidden" name="video" value="video" />
                <button type="submit">Maak een video</button>
            </Form>
            <Form method="post">
                <input type="hidden" name="video" value="none" />
                <button className="neg__button" type="submit">Liever niet</button>
            </Form>
        </>
    )
}

export default FullResult;