import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "./hooks/useAuthStatus";
import Spinner from "../../src/assets/svg/spinner.svg"
export default function PrivateRoute() {
    const { loggedIn, checkingStatus } = useAuthStatus();
    if (checkingStatus) {
        return (
            <Spinner />
        )
    }
    return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}
