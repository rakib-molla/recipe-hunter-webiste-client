import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chefDetails/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://chef-resturent-server-a10.vercel.app/chef/${params.id}`)
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            }
            
        ]
    }
    

])

export default router;