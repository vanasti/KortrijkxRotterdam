import BodyCopy from "../components/BodyCopy";
import Button from "../components/Button";
import Label from "../components/Label";
import Member from "../components/Member";
import SecretLabel from "../components/SecretLabel";
const Place = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                    <BodyCopy title="Waar kan je ons vinden" copy="Op het eiland vol met cultuur genaamd ‘Buda eiland’ vind je onze stickerbooth! Specifieker aan de saaie grijze brug die wij samen gaan omtoveren!" />
                    <Button link="https://www.google.com/maps/place/Budabrug/@50.8315375,3.2588162,18.29z/data=!4m20!1m13!4m12!1m4!2m2!1d3.2553671!2d50.8315525!4e1!1m6!1m2!1s0x47c33ba9c10fd9e9:0xf9f60256418d1a4!2sBuda+Bridge!2m2!1d3.2617154!2d50.8314293!3m5!1s0x47c33ba9c10fd9e9:0xf9f60256418d1a4!8m2!3d50.8314293!4d3.2617154!16s%2Fg%2F121g7qh2?entry=ttu" text="Vind ons op Google Maps" />
                </div>
                <div>
                    <img src="" alt="" />
                    <Label text="Overleiestraat 1, 8500 KORTRIJK" />
                </div>
            </div>
            <div>
                <BodyCopy title="Ons team" />
                <div>
                    <Member name="Tibo Van Assche" role="Tech Lead" />
                    <Member name="Lauren van der Stel" role="UX Lead" />
                    <Member name="Keesie Mulder" role="UX Lead" />
                    <Member name="Yärnn Somers" role="Design Lead" />
                </div>
                <SecretLabel title="Buda" copy="Onze geheim hoofdkantoor is te vinden op het Buda-eiland. TIp: het gebouw heeft Buda ook in haar naam. Neem zeker een kijkje ;)." />
            </div>
        </div>
    );
}

export default Place;