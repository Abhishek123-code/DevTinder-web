import { BASE_URL } from "../utils/constants";

export const requestAction = async ({ request }) => {
  const formData = await request.formData();
  const status = formData.get("status");
  const requestId = formData.get("requestId");

  try {
    const res = await fetch(
      `${BASE_URL}/request/review/${status}/${requestId}`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }
  } catch (Err) {
    return { error: Err.message };
  }
};
