import StarEight from "../graphics/StarEight";
import Triangle from "../graphics/Triangle";

const HeaderElement = ({content, theme}) => {
    return (
        <div className="header__image">
            <StarEight color="black" />
            <Triangle orientation="right" />
            <Triangle orientation="right" />
            <div className={theme == "black" ? "header__element__text black" : "header__element__text blue"}><p>{content}</p></div>
            <Triangle orientation="left" />
            <Triangle orientation="left" />
            <StarEight color="black"/>
        </div>
    )
}

export default HeaderElement;