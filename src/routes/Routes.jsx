import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboards from "../layouts/Dashboards";
import Cart from "../pages/Dashboards/Cart/Cart";
import AllUsers from "../pages/Dashboards/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/Dashboards/AddItems/AddItems";
import ManageItems from "../pages/Dashboards/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboards/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboards/Payment/Payment";
import PaymentHistory from "../pages/Dashboards/Payment/PaymentHistory";
import AdminHome from "../pages/Dashboards/AdminHome/AdminHome";
import UserHome from "../pages/Dashboards/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboards />
      </PrivateRoutes>
    ),
    children: [
      // user routes
      {
        path: "user",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      // Admin routes
      {
        path: "admin",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoutes>
            <UpdateItem />
          </AdminRoutes>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://restaurant-app-server.vercel.app/menu/${params.id}`
          );
        },
      },
    ],
  },
]);
