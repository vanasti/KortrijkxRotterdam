import { Form, redirect } from "react-router-dom";
import Statement from "../components/text/Statement";

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
                content="Here comes the header for the while page"            
            />
            <p>Printing....</p>
            <Form method="post">
                <input type="hidden" name="video" value="video" />
                <button type="submit">Add a video</button>
            </Form>
            <Form method="post">
                <input type="hidden" name="video" value="none" />
                <button type="submit">Rather not</button>
            </Form>
        </>
    )
}

export default FullResult;