import { redirect } from "react-router";
import store from "../../utils/store";
import { BASE_URL } from "../../utils/constants";
import { setUser } from "../../utils/userSlice";

export const loginLoader = async () => {
  const state = store.getState();

  if (state.user) {
    return redirect("/feed");
  }

  try {
    const res = await fetch(BASE_URL + "/profile", {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      const user = await res.json();
      store.dispatch(setUser(user));
      return redirect("/feed");
    }
  } catch (err) {
    // Log the error for debugging, but allow the login page to render
    console.error("Auto-login check failed:", err);
  }

  return null;
};
