import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
// import { children } from "react";
import Dashboard from "../Layout/Dashboard";
import About from "../pages/About/About";
import Contact from "../pages/About/Contact";
import AddItems from "../pages/Dashboard/AddItems";
import AllUsers from "../pages/Dashboard/AllUsers";
import Cart from "../pages/Dashboard/Cart";
import ContactPage from "../pages/Dashboard/ContactPage";
import ManageBookings from "../pages/Dashboard/ManageBookings";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/OurShop/Order";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart />
            },
            // admin routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateItem />,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/menu`);
                },
            },
            {
                path: 'manageBookings',
                element: <AdminRoute><ManageBookings /></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
        ]
    }
]);