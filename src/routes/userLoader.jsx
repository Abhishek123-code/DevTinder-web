// src/utils/userLoader.js
import store from "../utils/store";
import { setUser } from "../utils/userSlice";

export const userLoader = async () => {
  const state = store.getState();

  // 1. If user is already in Redux, stop here.
  if (state.user) return null;

  // 2. If not, fetch from API
  try {
    const res = await fetch("http://localhost:7777/profile", {
      method: "GET",
      credentials: "include", // Sends the cookie
    });

    if (res.ok) {
      const user = await res.json();
      store.dispatch(setUser(user));
      return null;
    }
  } catch (err) {
    return err;
  }
  return null;
};
