import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import AddProduct from "../Components/pages/AddProduct";
import MyCart from "../Components/mycart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/pages/ErrorPage";
import Alldata from "../Components/pages/Alldata";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: "/AddProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },



            {
                path:'alldata',
                element:<Alldata></Alldata>,
            }
        ]
    }
]);
export default router;