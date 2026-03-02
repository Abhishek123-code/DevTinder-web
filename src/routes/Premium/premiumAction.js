import { BASE_URL } from "../../utils/constants";
import store from "../../utils/store";
import { setUser } from "../../utils/userSlice";

export const premiumAction = async ({ request }) => {
  const formData = await request.formData();

  const type = formData.get("type");

  const res = await fetch(BASE_URL + "/payment/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type }),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    return { error: errorMessage };
  }

  const resData = await res.json();
  const { amount, keyId, currency, notes, orderId } = resData;

  const options = {
    key: keyId,
    amount,
    currency,
    name: "DevConnect",
    description: "Connect with Devs",
    order_id: orderId,
    prefill: {
      name: notes.firstName + " " + notes.lastName,
      email: notes.email,
      contact: "9999999999",
    },
    theme: {
      color: "#F37254",
    },
    handler: async function (response) {
      // 1-second delay to let your backend webhook save to MongoDB first
      console.log(response);
      setTimeout(async () => {
        try {
          // 1. Verify Premium Status
          const verifyRes = await fetch(BASE_URL + "/premium/verify", {
            method: "GET",
            credentials: "include",
          });

          const verifyData = await verifyRes.json(); // Fixed the fetch parsing!

          if (verifyData.isPremium) {
            // 2. Fetch their newly updated user profile from the backend
            const profileRes = await fetch(BASE_URL + "/profile", {
              method: "GET",
              credentials: "include",
            });
            const profileData = await profileRes.json();

            // 3. Dispatch the new profile to Redux! (Instant UI update)
            store.dispatch(setUser(profileData));

            // 4. Send them back to the feed
            window.location.href = "/feed";
          } else {
            alert(
              "Payment is still processing. Your status will update shortly.",
            );
          }
        } catch (error) {
          console.error("Verification failed:", error);
        }
      }, 1000);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  return null;
};
