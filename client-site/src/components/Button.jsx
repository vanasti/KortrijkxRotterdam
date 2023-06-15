import { Link } from "react-router-dom";
const Button = (prop) => {
    return (
        <>
                <Link className="button" to={prop.link}>{prop.text}</Link>
        </>
    );
}
export default Button;