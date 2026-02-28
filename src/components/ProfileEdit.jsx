import { Form, useActionData } from "react-router";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfileEdit = () => {
  const user = useSelector((store) => store.user);
  const actionData = useActionData();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [PhotoURL, setPhotoURL] = useState(user.PhotoURL);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [description, setDescription] = useState(user.description);
  const [skills, setSkills] = useState(user.skills.join(", "));

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (actionData?.success) {
      const timer = setTimeout(() => {
        setShowToast(true);
      }, 0); // 0ms delay moves this to the next event loop tick

      // Hide the toast after 3 seconds
      const hideTimer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      // Cleanup both timers
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [actionData]);

  return (
    //     <div className="flex justify-center my-10 items-center gap-4">
    //       {showToast && (
    //         <div className="toast toast-top toast-center z-50">
    //           <div className="alert alert-success">
    //             <span>{actionData?.success}</span>
    //           </div>
    //         </div>
    //       )}

    //       {/* Edit Card */}
    //       <div className="card bg-base-200 w-96 border-base-300 border">
    //         <div className="card-body">
    //           <h2 className="card-title justify-center mb-2">Edit Profile</h2>

    //           <Form method="post" className="flex flex-col gap-3">
    //             {/* 2. FIXED: Row 1 - Name split into 2 columns */}
    //             <div className="flex gap-2">
    //               <label className="form-control w-full">
    //                 <div className="label p-1">
    //                   <span className="label-text">First Name</span>
    //                 </div>
    //                 <input
    //                   type="text"
    //                   name="firstName"
    //                   className="input input-bordered w-full input-sm"
    //                   value={firstName}
    //                   onChange={(e) => setFirstName(e.target.value)}
    //                 />
    //               </label>
    //               <label className="form-control w-full">
    //                 <div className="label p-1">
    //                   <span className="label-text">Last Name</span>
    //                 </div>
    //                 <input
    //                   type="text"
    //                   name="lastName"
    //                   className="input input-bordered w-full input-sm"
    //                   value={lastName}
    //                   onChange={(e) => setLastName(e.target.value)}
    //                 />
    //               </label>
    //             </div>

    //             {/* Row 2 - Photo URL */}
    //             <label className="form-control w-full">
    //               <div className="label p-1">
    //                 <span className="label-text">Photo URL</span>
    //               </div>
    //               <input
    //                 type="text"
    //                 name="PhotoURL"
    //                 className="input input-bordered w-full input-sm"
    //                 value={PhotoURL}
    //                 onChange={(e) => setPhotoURL(e.target.value)}
    //               />
    //             </label>

    //             {/* 2. FIXED: Row 3 - Age & Gender split into 2 columns */}
    //             <div className="flex gap-2">
    //               <label className="form-control w-full">
    //                 <div className="label p-1">
    //                   <span className="label-text">Age</span>
    //                 </div>
    //                 <input
    //                   type="text"
    //                   name="age"
    //                   className="input input-bordered w-full input-sm"
    //                   value={age}
    //                   onChange={(e) => setAge(e.target.value)}
    //                 />
    //               </label>
    //               <label className="form-control w-full">
    //                 <div className="label p-1">
    //                   <span className="label-text">Gender</span>
    //                 </div>
    //                 <select
    //                   name="gender"
    //                   // defaultValue={gender || "Select"}
    //                   className="select select-bordered w-full select-sm"
    //                   value={gender}
    //                   onChange={(e) => setGender(e.target.value)}
    //                 >
    //                   <option disabled={true}>Select</option>
    //                   <option value="male">Male</option>
    //                   <option value="female">Female</option>
    //                   <option value="others">Others</option>
    //                 </select>
    //               </label>
    //             </div>

    //             {/* Row 4 - Skills */}
    //             <label className="form-control w-full">
    //               <div className="label p-1">
    //                 <span className="label-text">Skills</span>
    //               </div>
    //               <input
    //                 type="text"
    //                 name="skills"
    //                 className="input input-bordered w-full input-sm"
    //                 placeholder="React, Node, Java"
    //                 value={skills}
    //                 onChange={(e) => setSkills(e.target.value)}
    //               />
    //             </label>

    //             {/* Row 5 - Description */}
    //             <label className="form-control w-full">
    //               <div className="label p-1">
    //                 <span className="label-text">Description</span>
    //               </div>
    //               <textarea
    //                 className="textarea textarea-bordered h-20"
    //                 name="description"
    //                 value={description}
    //                 onChange={(e) => setDescription(e.target.value)}
    //               ></textarea>
    //             </label>

    //             <p className="text-red-500 text-sm">{actionData?.error}</p>

    //             <div className="card-actions justify-center mt-2">
    //               <button className="btn btn-primary btn-wide btn-sm">Save</button>
    //             </div>
    //           </Form>
    //         </div>
    //       </div>

    //       {/* Divider is optional if you use gap-4 in parent */}
    //       <div className="divider lg:divider-horizontal"></div>

    //       {/* Pass the split array to UserCard so the preview updates in real-time */}
    //       <UserCard
    //         feedData={{
    //           firstName,
    //           lastName,
    //           PhotoURL,
    //           description,
    //           skills: skills.split(",").filter((s) => s.trim() !== ""), // Real-time preview fix
    //           age,
    //           gender,
    //         }}
    //       />
    //     </div>
    //   );
    // };
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 my-10 max-w-6xl mx-auto px-4">
      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center z-50 mt-16">
          <div className="alert alert-success shadow-lg">
            <span>{actionData?.success}</span>
          </div>
        </div>
      )}

      {/* Main DaisyUI Form Card */}
      <div className="card bg-base-200 shadow-2xl w-full max-w-md border border-base-300">
        <div className="card-body p-8">
          <h2 className="card-title text-3xl font-bold mb-6">Edit Profile</h2>

          <Form method="post" className="flex flex-col gap-4">
            {/* Row 1: Name */}
            <div className="flex gap-4">
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold opacity-80">
                    First Name
                  </span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered focus:input-primary w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold opacity-80">
                    Last Name
                  </span>
                </div>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered focus:input-primary w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>

            {/* Row 2: Photo */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold opacity-80">
                  Photo URL
                </span>
              </div>
              <input
                type="text"
                name="PhotoURL"
                className="input input-bordered focus:input-primary w-full"
                value={PhotoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </label>

            {/* Row 3: Age & Gender */}
            <div className="flex gap-4">
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold opacity-80">
                    Age
                  </span>
                </div>
                <input
                  type="text"
                  name="age"
                  className="input input-bordered focus:input-primary w-full"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold opacity-80">
                    Gender
                  </span>
                </div>
                <select
                  name="gender"
                  className="select select-bordered focus:select-primary w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled={true} value="">
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </label>
            </div>

            {/* Row 4: Skills */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold opacity-80">
                  Skills (comma separated)
                </span>
              </div>
              <input
                type="text"
                name="skills"
                className="input input-bordered focus:input-primary w-full"
                placeholder="React, Node.js, MongoDB"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>

            {/* Row 5: Bio */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold opacity-80">Bio</span>
              </div>
              <textarea
                className="textarea textarea-bordered focus:textarea-primary h-28 text-base leading-relaxed"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            {/* Error & Save Button */}
            {actionData?.error && (
              <p className="text-error text-sm font-medium px-1">
                {actionData.error}
              </p>
            )}
            <div className="card-actions mt-4">
              <button className="btn btn-primary w-full text-lg shadow-lg shadow-primary/20">
                Save Changes
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className="divider lg:divider-horizontal text-base-content/40 font-semibold tracking-widest text-xs uppercase">
        Live Preview
      </div>

      {/* Live Preview UserCard */}
      <div className="flex flex-col items-center">
        <UserCard
          feedData={{
            firstName,
            lastName,
            PhotoURL,
            description,
            skills: skills
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s !== ""),
            age,
            gender,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
