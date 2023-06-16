import { Link } from "react-router-dom";
const Social = ({ link, path, social }) => {
    return (
        <div>
            <Link className="social" to={link}>
                <img src={path} alt="social__icon" />
                <p>{social}</p>
            </Link>
        </div>
    );
}

export default Social;