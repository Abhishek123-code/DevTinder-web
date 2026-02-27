import Login from "./routes/Login/Login";
import { formAction } from "./routes/Login/LoginAction";
import { createBrowserRouter } from "react-router";
import { userLoader } from "./routes/userLoader";
import Body from "./routes/Body";
import ProtectedLayout from "./routes/ProtectedLayout";
import Feed from "./routes/Feed/Feed";
import { feedLoader } from "./routes/Feed/feedLoader";
import Profile from "./routes/Profile/Profile";
import { EditAction } from "./routes/Profile/EditAction";
import Connections from "./routes/Connections/Connections";
import { connectionLoader } from "./routes/Connections/connectionLoader";
import Request from "./routes/Requests/Request";
import { requestAction } from "./routes/Requests/requestAction";
import { requestLoader } from "./routes/Requests/requestLoader";
import { feedAction } from "./routes/Feed/feedAction";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Body,
    children: [
      { index: true, Component: () => <div>Home</div> },
      {
        path: "login",
        Component: Login,
        action: formAction,
      },
      {
        Component: ProtectedLayout,
        loader: userLoader,
        children: [
          {
            path: "profile",
            Component: Profile,
            action: EditAction,
          },
          {
            path: "feed",
            Component: Feed,
            loader: feedLoader,
            action: feedAction,
          },
          {
            path: "connections",
            Component: Connections,
            loader: connectionLoader,
          },
          {
            path: "Requests",
            Component: Request,
            action: requestAction,
            loader: requestLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
