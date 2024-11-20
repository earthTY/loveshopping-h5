import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../pages/login"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
