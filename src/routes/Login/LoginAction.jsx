import { redirect } from "react-router";
import store from "../../utils/store";
import { setUser } from "../../utils/userSlice";
import { BASE_URL } from "../../utils/constants";

// c:\Users\ABHISHEK OJHA\Projects\DevTinder-web\src\routes\loginAction.js
export const formAction = async ({ request }) => {
  const formData = await request.formData();
  const isSignup = formData.get("isSignup") === "true";

  const email = formData.get("email");
  const password = formData.get("password");

  const url = isSignup ? `${BASE_URL}/signup` : `${BASE_URL}/login`;
  const body = { email, password };

  if (isSignup) {
    body.firstName = formData.get("firstName");
    body.lastName = formData.get("lastName");
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }

    const user = await res.json();
    isSignup
      ? store.dispatch(setUser(user.data))
      : store.dispatch(setUser(user));

    return isSignup ? redirect("/profile") : redirect("/feed");
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
