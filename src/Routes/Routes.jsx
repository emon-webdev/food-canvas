import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
// import { children } from "react";
import About from "../pages/About/About";
import Contact from "../pages/About/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/OurShop/Order";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
]);