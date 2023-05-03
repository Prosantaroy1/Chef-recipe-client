import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ChefCard from "../pages/ChefCard/ChefCard";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            } 
            
        ]
       
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    
    {
        path: '/services/:id',
        element: <ChefDetails/>
    }
    
      

])

export default router;