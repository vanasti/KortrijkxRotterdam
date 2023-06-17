import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="navigation">
            <div>
                <p>logo</p>
                <ul>
                    <li>
                        <NavLink className="navtab" to={"/"}>
                            StickerWall
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navtab" to={"place"}>
                            Where to find us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"stickercreation"} className="nav__button">
                            Maak mijn sticker
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;