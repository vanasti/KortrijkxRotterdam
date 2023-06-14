import { Link } from "react-router-dom";
const Button = (prop) => {
    return (
        <>
            <button className="button">
                <Link to={prop.link}>{prop.text}</Link>
            </button>
        </>
    );
}
export default Button;