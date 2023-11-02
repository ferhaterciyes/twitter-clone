import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import NotFound from "../pages/not-found";
import MainLayout from "../layoults/main";
import Messages from "../pages/message";
import Lists from "../pages/lists";
import Communities from "../pages/communities";
import Premium from "../pages/premium/premium";
import Profile from "../pages/profile";
import Bookmarks from "../pages/bookmarks"
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path:"bookmarks",
        element:<Bookmarks />
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "premium",
        element: <Premium />,
      },
      {
        path:'/:slug',
        element:<Profile />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;
