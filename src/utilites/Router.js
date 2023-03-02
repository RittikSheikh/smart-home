import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import { ProductAndCartLoader } from "./P&CDataLoader";
import About from "../components/About";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, loader: ProductAndCartLoader, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/cart', element: <Cart /> },
            {path: '/about', element: <About/>}
        ]
    }
])

export default router;