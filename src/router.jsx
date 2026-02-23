import Login from "./routes/Login";
import { formAction } from "./routes/LoginAction";
import { createBrowserRouter } from "react-router";
import Profile from "./routes/Profile";
import Feed from "./routes/Feed";
import App from "./App";
import { userLoader } from "./routes/userLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: userLoader,
    children: [
      { index: true, Component: () => <div>Home</div> },
      {
        path: "login",
        Component: Login,
        action: formAction,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "feed",
        Component: Feed,
      },
    ],
  },
]);

export default router;
