import { Form, redirect } from "react-router-dom";
import Statement from "../components/text/Statement";

export const action = () => {
    return redirect("/question/1");
}


const Explain = () => {
    return (
        <>
            <Statement
                content="Here comes the header for the explain page"            
            />
            <p>Explanation page</p>
            <Form method="post">
                <button type="submit">Create a sticker</button>
            </Form>
        </>
    )
}

export default Explain;