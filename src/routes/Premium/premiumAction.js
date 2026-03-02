import { BASE_URL } from "../../utils/constants";

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
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  return null;
};
