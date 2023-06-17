import Button from "../components/Button";
const Error = () => {
    return (
        <div className="error">
            <h2>Oh no! It seems like you're lost!</h2>
            <Button link="/" text="Keer terug naar de stickermuur" />
        </div>
    );
}

export default Error;