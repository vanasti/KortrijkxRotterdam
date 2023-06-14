import Social from "./Social";
import FooterCopy from "./FooterCopy";
const Footer = () => {
    return (
        <div className="container__footer">
            <div className="container__socials">
                <Social social="@Kleef_K" />
                <Social social="@Kleef_K" />
                <Social social="@Kleef_K" />
            </div>
            <FooterCopy title="Heb je vragen?" subtitle="contacteer ons" copy="kleef@kortrijk.be" secondcopy="+32 476 85 34" />
            <FooterCopy title="Breng ons een bezoekje" copy="Wij heten jou altijd welkom! Open 24/7" secondcopy="Overleiestraat 1, 8500 Kortrijk" />
        </div>
    );
}

export default Footer;