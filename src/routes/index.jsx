import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import Explore from "~/pages/explore/index.jsx";
import Notifications from "~/pages/notifications/index.jsx";
import MainLayout from "~/layouts/main/index.jsx";
import Messages from "~/pages/messages/index.jsx";
import Lists from "~/pages/lists/index.jsx";
import Bookmarks from "~/pages/bookmarks/index.jsx";
import NotFound from "~/pages/not-found/index.jsx";
import Verified from "~/pages/verified/index.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/notifications",
                element: <Notifications/>
            },
            {
                path: "/explore",
                element: <Explore/>
            },
            {
                path: "/messages",
                element: <Messages/>
            },
            {
                path: "lists",
                element: <Lists/>
            },
            {
                path: "bookmarks",
                element: <Bookmarks/>
            },
            {
                path: "verified",
                element: <Verified/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]

    },
])
export default routes;