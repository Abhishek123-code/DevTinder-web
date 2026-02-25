import { BASE_URL } from "../utils/constants";
import store from "../utils/store";
import { setUser } from "../utils/userSlice";

export const EditAction = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const age = formData.get("age");
  const PhotoURL = formData.get("PhotoURL");
  const gender = formData.get("gender");
  const description = formData.get("description");
  const skillsString = formData.get("skills");

  const skills = skillsString
    ? skillsString
        .split(",")
        .map((skill) => skill.trim())
        .filter((s) => s !== "")
    : [];

  try {
    const res = await fetch(BASE_URL + "/profile/edit", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        PhotoURL,
        description,
        gender,
        skills,
      }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      return { error: errorMessage };
    }

    const editData = await res.json();
    store.dispatch(setUser(editData.data));
    return { success: "Profile updated successfully." };
  } catch (err) {
    console.log(err.message);
  }
};
