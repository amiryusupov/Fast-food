import { lazy } from "react";
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Verify = lazy(() => import("./pages/Auth/Verify"));

export const routes = [
    {
        id: 1,
        path: "/login",
        component: <Login/>
    },
    {
        id: 2,
        path: "/register",
        component: <Register/>
    },
    {
        id: 3,
        path: "/verify",
        component: <Verify/>
    }
]