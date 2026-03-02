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
import { loginLoader } from "./routes/Login/loginLoader";
import Home from "./routes/Home";

// Legal Pages Imports
import Terms from "./routes/Legal/Terms";
import Privacy from "./routes/Legal/Privacy";
import Refund from "./routes/Legal/Refund";
import Contact from "./routes/Legal/Contact";
import Premium from "./routes/Premium/Premium";
import { premiumAction } from "./routes/Premium/premiumAction";
import Chat from "./routes/chat/chat";
import { ChatLoader } from "./routes/chat/chatLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Body,

    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: Login,
        action: formAction,
        loader: loginLoader,
      },
      // Public Legal Routes
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "refund", Component: Refund },
      { path: "contact", Component: Contact },
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
          {
            path: "premium",
            Component: Premium,
            action: premiumAction,
          },
          {
            path: "/chat/:targetUserId",
            Component: Chat,
            loader: ChatLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
