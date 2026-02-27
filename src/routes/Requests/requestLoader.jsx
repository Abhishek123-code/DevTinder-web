import { BASE_URL } from "../../utils/constants";

export const requestLoader = async () => {
  try {
    const res = await fetch(BASE_URL + "/user/requests/received", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }

    const requests = await res.json();
    return requests.data;
  } catch (Err) {
    return { error: Err.message };
  }
};
