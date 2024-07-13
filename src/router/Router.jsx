import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router;