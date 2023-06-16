import { Link } from "react-router-dom";
const Button = ({link, text}) => {
    return (
        <>
                <Link className="button" to={link}>{text}</Link>
        </>
    );
}
export default Button;