import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AllProducts from "../pages/AllProducts";
import Laptops from "../pages/Laptops";
import HomeLayout from "../layouts/HomeLayout";
import Phones from "../pages/Phones";
import Accessories from "../pages/Accessories";
import SmartWatches from "../pages/SmartWatches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          { path: "/", element: <AllProducts /> },
          { path: "/laptops", element: <Laptops /> },
          { path: "/phones", element: <Phones /> },
          { path: "/accessories", element: <Accessories /> },
          { path: "/smart-watches", element: <SmartWatches /> },
        ],
      },
    ],
  },
]);

export default router;
