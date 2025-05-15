import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import DashboardOverview1 from "../pages/DashboardOverview1";
import MenuViewPage from "../pages/menu/menuViewPage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  const routes = [
    {
      path: "/admin",
      element: <Menu />,
      children: [
        {
          path: "/admin/dashboard",
          element: <DashboardOverview1 />,
        }
      ],
    },
    {
      path: "/",
      element: <MenuViewPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
