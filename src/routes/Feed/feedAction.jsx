import { BASE_URL } from "../../utils/constants";
import { removeFromFeed } from "../../utils/feedSlice";
import store from "../../utils/store";

export const feedAction = async ({ request }) => {
  const formData = await request.formData();

  const userId = formData.get("userId");
  const status = formData.get("status");

  try {
    const res = await fetch(`${BASE_URL}/request/send/${status}/${userId}`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }

    const data = await res.json();
    store.dispatch(removeFromFeed(data.data.toUserId));
  } catch (err) {
    return { error: err.message };
  }
};
