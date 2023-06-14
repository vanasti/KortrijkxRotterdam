import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () =>{
    return(
        <nav className="navigation">
            <p>logo</p>
            <ul>
                <li>
                    <NavLink to={"/"}>
                        StickerWall
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"place"}>
                        Where to find us
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"stickercreation"}>
                        <Button text="Maak mijn sticker"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;