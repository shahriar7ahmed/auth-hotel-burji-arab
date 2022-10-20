import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Features from "../components/Features";
import Login from "../components/Login";
import Pricing from "../components/Pricing";
import Product from "../components/Product";
import Root from "../components/Root";
import SingUp from "../components/SingUp";

const routes = createBrowserRouter([
    {
        path: '/', element: <Root />,
        loader:()=>fetch('https://fakestoreapi.com/products')
        , children: [
            {
                path:'/',element:<Product/>
            },
            {
                path:'/product',element:<Product/>
            },
            {
                path:'/features',element: <Features/>
            },
            {
                path:'pricing',element: <Pricing/>
            },
            {
                path:'about', element:<About/>
            },
            {
                path:'signup',element:<SingUp/>
            },
            {
                path:'login',element:<Login/>
            },
            {
                path:'*',element:<ErrorPage/>
            }
        ]
    }
])

export default routes;