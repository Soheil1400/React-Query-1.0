import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home";
import Section1 from "../pages/section1";
import Test from "../pages/test";


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
                index: true
            },
        ]
    },
    {
        path:'/test',
        element: <Test/>
    }
])