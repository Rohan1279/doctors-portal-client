import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppoinments from "../../Pages/DashBoard/MyAppoinments/MyAppoinments";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/appoinment",
        element: <Appoinment />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppoinments />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
        errorElement: <ErrorPage />,
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
      },
    ],
  },
]);
