import Login from "./routes/Login";
import { formAction } from "./routes/LoginAction";
import { createBrowserRouter } from "react-router";
import Profile from "./routes/Profile";
import { userLoader } from "./routes/userLoader";
import Body from "./routes/Body";
import ProtectedLayout from "./routes/ProtectedLayout";
import { feedLoader } from "./routes/feedLoader";
import Feed from "./routes/Feed";

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
          },
          {
            path: "feed",
            Component: Feed,
            loader: feedLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
