import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>404 Error!</h1>
            <h2>Something went wrong</h2>
            <h3>{error.status}:{error.statusText}</h3>
        </div>
    )
}

export default Error;