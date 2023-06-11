import { Form, redirect } from "react-router-dom";

export const action = () => {
    return redirect('/end');
}

const Video = () => {
    return (
        <>
            <p>Video comes here!</p>
            <Form method="post">
                <button type="submit">End videoflow</button>
            </Form>
        </>
    )
}

export default Video;