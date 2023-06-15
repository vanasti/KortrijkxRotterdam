import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Theme from "../components/Theme";

const Root = () => {
    const navigation = useNavigation();
    return (
        <>
            <main className="main">
                <Navbar />
                <h1>Hello world</h1>
                <Theme theme="Muziek" />
                <Outlet />
                <Footer />
            </main>
        </>
    );
}

export default Root;