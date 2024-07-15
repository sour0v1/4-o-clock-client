import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Login from "../page/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
  ]);

  export default router;