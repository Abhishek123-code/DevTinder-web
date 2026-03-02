// src/utils/userLoader.js
import { redirect } from "react-router";
import store from "../utils/store";
import { setUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

export const userLoader = async () => {
  const state = store.getState();

  // 1. If user is already in Redux, stop here.
  if (state.user) return null;

  // 2. If not, fetch from API
  const res = await fetch(BASE_URL + "/profile", {
    method: "GET",
    credentials: "include", // Sends the cookie
  });

  if (res.status === 401) {
    return redirect("/login");
  }
  if (!res.ok) {
    throw new Error("Invalid Token");
  }
  const user = await res.json();
  store.dispatch(setUser(user));
  return null;
};
