import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
]);
export default router;
