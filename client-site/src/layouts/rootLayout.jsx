import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useNavigation } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
    const navigation = useNavigation();
    return (
        <>
            <main className="main">
                <Navbar />
                <h1>Hello world</h1>
                <Outlet />
                <Footer />
            </main>
        </>
    );
}

export default Root;