import { BASE_URL } from "../../utils/constants";

export const ChatLoader = async ({ params }) => {
  const { targetUserId } = params;

  const res = await fetch(BASE_URL + "/chat/" + targetUserId, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    return { error: errorMessage };
  }

  const chat = await res.json();
  return chat;
};
