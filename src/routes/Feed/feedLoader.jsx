import { BASE_URL } from "../../utils/constants";
import { setFeed } from "../../utils/feedSlice";
import store from "../../utils/store";

export const feedLoader = async () => {
  try {
    const state = store.getState();
    if (state.feed) return;

    const res = await fetch(BASE_URL + "/feed", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
      // return console.log("error", error);
    }
    const feed = await res.json();
    store.dispatch(setFeed(feed));
  } catch (err) {
    console.log(err.message);
  }
};
