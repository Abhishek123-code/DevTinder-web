import { redirect} from "react-router";
import store from "../utils/store";
import { setUser } from "../utils/userSlice";

// c:\Users\ABHISHEK OJHA\Projects\DevTinder-web\src\routes\loginAction.js
export const formAction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const res = await fetch("http://localhost:7777/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
      // return console.log("error", error);
    }

    const user = await res.json();
    console.log(user);
    store.dispatch(setUser(user));

    return redirect("/feed");
  } catch (err) {
    console.log(err.message);
  }
};
