import Social from "./Social";
import FooterCopy from "./FooterCopy";
const Footer = () => {
    return (
        <div className="container__footer">
            <div>
                <FooterCopy title="Blijf op de hoogte" />
            <div className="container__socials">
                <Social path="../../public/desktop/footer/instagram.svg" social="@Kleef_K" />
                <Social path="../../public/desktop/footer/tiktok.svg" social="@Kleef_K" />
                <Social path="../../public/desktop/footer/snapchat.svg" social="@Kleef_K" />
            </div>
            </div>
            <FooterCopy title="Heb je vragen?" subtitle="contacteer ons" copy="kleef@kortrijk.be" secondcopy="+32 476 85 34" />
            <FooterCopy title="Breng ons een bezoekje" copy="Wij heten jou altijd welkom! Open 24/7" secondcopy="Overleiestraat 1, 8500 Kortrijk" />
            <div className="footer__info">
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>@ 2023 Team All Over the Place</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;