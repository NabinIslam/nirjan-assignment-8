import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AllProducts from "../pages/AllProducts";
import Laptops from "../pages/Laptops";
import HomeLayout from "../layouts/HomeLayout";
import Phones from "../pages/Phones";
import Accessories from "../pages/Accessories";
import SmartWatches from "../pages/SmartWatches";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

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
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
