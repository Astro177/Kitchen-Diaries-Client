import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import App from "../App";
import AboutUs from "../components/AboutUs";
import Login from "../components/Login";
import Register from "../components/Register";

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
