import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import AddProduct from "../Components/pages/AddProduct";
import MyCart from "../Components/mycart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/pages/ErrorPage";
import Alldata from "../Components/pages/Alldata";
import Updateproduct from "../Components/pages/Updateproduct";
import Singelbranddata from "../Components/pages/Singelbranddata";
import PrivateRoute from "./PrivateRoute";
import Detailsproduct from "../Components/pages/Detailsproduct";

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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
                path:'/alldata',
                element:<Alldata></Alldata>,
            },
            {
                path:'/updateproduct/:id',
                element:<Updateproduct></Updateproduct>,
                loader:({params})=>fetch(`http://localhost:5000/productsbyid/${params.id}`)
            },
            {
                path:'/singelbranddata/:brand',
                element:<Singelbranddata></Singelbranddata>
            },
            {
                path:'/products/:id',
                element:<Detailsproduct></Detailsproduct>,
                loader:()=>fetch('http://localhost:5000/products')
            }
        ]
    }
]);
export default router;