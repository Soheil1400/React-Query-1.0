import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home";
import Section1 from "../pages/section1";
import Test from "../pages/test";
import Section2 from "../pages/section2";
import Section3 from "../pages/section3";
import Section4 from "../pages/section4";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                index: true
            },
            {
                path: '/course/section1',
                element: <Section1/>,
            },
            {
                path: '/course/section2',
                element: <Section2/>,
            },
            {
                path: '/course/section3',
                element: <Section3/>,
            },
            {
                path: '/course/section4',
                element: <Section4/>,
            },
        ]
    },
    {
        path:'/test',
        element: <Test/>
    }
])