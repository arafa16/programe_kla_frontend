import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import MenuViewPage from "../pages/menu/menuViewPage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import MenuAdminViewPage from "../pages/menuAdmin/menuAdminViewPage";
import MenuAdminCreatePage from "../pages/menuAdmin/menuAdminCreatePage";
import MenuAdminViewByIdPage from "../pages/menuAdmin/menuAdminViewByIdPage";
import MenuAdminEditPage from "../pages/menuAdmin/menuAdminEditPage";
import UserAdminViewPage from "../pages/user/userAdminViewPage";
import UserAdminCreatePage from "../pages/user/userAdminCreatePage";
import UserAdminViewByIdPage from "../pages/user/userAdminViewByIdPage";
import UserAdminEditPage from "../pages/user/userAdminEditPage";

function Router() {
  const routes = [
    {
      path: "/admin",
      element: <Menu />,
      children: [
        {
          path: "/admin/menu",
          element: <MenuAdminViewPage />,
        },
        {
          path: "/admin/menu/create",
          element: <MenuAdminCreatePage />,
        },
        {
          path: "/admin/menu/view/:uuid",
          element: <MenuAdminViewByIdPage />,
        },
        {
          path: "/admin/menu/edit/:uuid",
          element: <MenuAdminEditPage />,
        },
        {
          path: "/admin/user",
          element: <UserAdminViewPage />,
        },
        {
          path: "/admin/user/create",
          element: <UserAdminCreatePage />,
        },
        {
          path: "/admin/user/view/:uuid",
          element: <UserAdminViewByIdPage />,
        },
        {
          path: "/admin/user/edit/:uuid",
          element: <UserAdminEditPage />,
        },
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
  ];

  return useRoutes(routes);
}

export default Router;
