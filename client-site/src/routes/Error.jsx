import { useRouteError } from "react-router-dom";
import Button from "../components/Button";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
       <>
            <div className="error">
                <h2>Oh no! It seems like you're post!</h2>
                <Button link="/" text="Keer terug naar de stickermuur" />
            </div>
            <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
       </>
        
    );
}

export default Error;