import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/home";
import { Component } from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Services from "../components/services";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
            path:"/",
            Component: Home,
        },
        {
            path:"/about",
            Component: About,
            
        },
        {
            path: "/contact",
            Component: Contact,
        },
        {
            path: "/services",
            Component: Services,
        }
    ],
    },
]) 