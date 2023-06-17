import { Outlet } from "react-router";
import HeaderElement from "../components/text/HeaderElement";

const Root = () => {
    return (
        <div className="container-main">
            <div className="header__container">
                <HeaderElement content="K'LEEF" theme="black"/>
                <HeaderElement content="MUSIC" theme="blue"/>
            </div>
            <div className="content__container">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;