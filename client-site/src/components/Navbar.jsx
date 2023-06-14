import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
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
                        <button>Maak mijn sticker</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;