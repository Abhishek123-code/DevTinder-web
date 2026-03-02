import { BASE_URL } from "../../utils/constants";

export const premiumLoader = async () => {
  const res = await fetch(BASE_URL + "/premium/verify", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    return null;
  }
};
