import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="main">
            <h1>Hello world</h1>
            <Outlet />
        </div>
    );
}

export default Root;