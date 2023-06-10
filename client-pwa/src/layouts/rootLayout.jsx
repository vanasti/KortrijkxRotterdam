import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="container-main">
            <h1>Hey</h1>
            <Outlet />
        </div>
    );
}

export default Root;