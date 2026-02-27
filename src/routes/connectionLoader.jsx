import { BASE_URL } from "../utils/constants";

export const connectionLoader = async () => {
  try {
    const res = await fetch(BASE_URL + "/user/requests/connection", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }

    const connections = await res.json();
    return connections.data;
  } catch (Err) {
    return { error: Err.message };
  }
};
