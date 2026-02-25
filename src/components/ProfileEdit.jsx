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
    //   <div className="flex justify-center my-10">
    //     {showToast && (
    //       <div className="toast toast-top toast-center mt-5">
    //         <div className="alert alert-success">
    //           <span>{actionData?.success}</span>
    //         </div>
    //       </div>
    //     )}

    //     <div className="card bg-base-300 w-96 shadow-xl">
    //       <div className="card-body">
    //         <h2 className="card-title justify-center">Edit Profile</h2>
    //         <Form method="post" className="pl-1.5">
    //           <legend className="fieldset-legend">First Name</legend>
    //           <input
    //             type="text"
    //             name="firstName"
    //             className="input"
    //             value={firstName}
    //             onChange={(e) => setFirstName(e.target.value)}
    //           />
    //           <legend className="fieldset-legend">Last Name</legend>
    //           <input
    //             type="text"
    //             name="lastName"
    //             className="input"
    //             value={lastName}
    //             onChange={(e) => setLastName(e.target.value)}
    //           />
    //           <legend className="fieldset-legend">Photo URL</legend>
    //           <input
    //             type="text"
    //             name="PhotoURL"
    //             className="input"
    //             value={PhotoURL}
    //             onChange={(e) => setPhotoURL(e.target.value)}
    //           />
    //           <legend className="fieldset-legend">Age</legend>
    //           <input
    //             type="text"
    //             name="age"
    //             className="input"
    //             value={age}
    //             onChange={(e) => setAge(e.target.value)}
    //           />
    //           <legend className="fieldset-legend">skills</legend>
    //           <input
    //             type="text"
    //             name="age"
    //             className="input"
    //             value={age}
    //             onChange={(e) => setAge(e.target.value)}
    //           />
    //           <legend className="fieldset-legend">Gender</legend>
    //           <select
    //             defaultValue="Gender"
    //             className="select select-neutral"
    //             name="gender"
    //             value={gender}
    //             onChange={(e) => setGender(e.target.value)}
    //           >
    //             <option disabled={true}>Gender</option>
    //             <option>male</option>
    //             <option>female</option>
    //             <option>other</option>
    //           </select>
    //           <legend className="fieldset-legend">Description</legend>
    //           <textarea
    //             className="textarea h-24"
    //             name="description"
    //             placeholder="Bio"
    //             value={description}
    //             onChange={(e) => setDescription(e.target.value)}
    //           ></textarea>
    //           <p className="text-red-500 text-sm pt-1 pl-1.5">
    //             {actionData?.error}
    //           </p>
    //           <div className="card-actions justify-center mt-3">
    //             <button className="btn btn-primary">Save</button>
    //           </div>
    //         </Form>
    //       </div>
    //     </div>
    //     <div className="divider lg:divider-horizontal"></div>
    //     <UserCard
    //       feedData={{
    //         firstName,
    //         lastName,
    //         PhotoURL,
    //         description,
    //         skills,
    //         age,
    //         gender,
    //       }}
    //     />
    //   </div>
    // );
    <div className="flex justify-center my-10 items-center gap-4">
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success">
            <span>{actionData?.success}</span>
          </div>
        </div>
      )}

      {/* Edit Card */}
      <div className="card bg-base-200 w-96 border-base-300 border">
        <div className="card-body">
          <h2 className="card-title justify-center mb-2">Edit Profile</h2>

          <Form method="post" className="flex flex-col gap-3">
            {/* 2. FIXED: Row 1 - Name split into 2 columns */}
            <div className="flex gap-2">
              <label className="form-control w-full">
                <div className="label p-1">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full input-sm"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label p-1">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered w-full input-sm"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>

            {/* Row 2 - Photo URL */}
            <label className="form-control w-full">
              <div className="label p-1">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="PhotoURL"
                className="input input-bordered w-full input-sm"
                value={PhotoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </label>

            {/* 2. FIXED: Row 3 - Age & Gender split into 2 columns */}
            <div className="flex gap-2">
              <label className="form-control w-full">
                <div className="label p-1">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  name="age"
                  className="input input-bordered w-full input-sm"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label p-1">
                  <span className="label-text">Gender</span>
                </div>
                <select
                  name="gender"
                  // defaultValue={gender || "Select"}
                  className="select select-bordered w-full select-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled={true}>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </label>
            </div>

            {/* Row 4 - Skills */}
            <label className="form-control w-full">
              <div className="label p-1">
                <span className="label-text">Skills</span>
              </div>
              <input
                type="text"
                name="skills"
                className="input input-bordered w-full input-sm"
                placeholder="React, Node, Java"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>

            {/* Row 5 - Description */}
            <label className="form-control w-full">
              <div className="label p-1">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-20"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <p className="text-red-500 text-sm">{actionData?.error}</p>

            <div className="card-actions justify-center mt-2">
              <button className="btn btn-primary btn-wide btn-sm">Save</button>
            </div>
          </Form>
        </div>
      </div>

      {/* Divider is optional if you use gap-4 in parent */}
      <div className="divider lg:divider-horizontal"></div>

      {/* Pass the split array to UserCard so the preview updates in real-time */}
      <UserCard
        feedData={{
          firstName,
          lastName,
          PhotoURL,
          description,
          skills: skills.split(",").filter((s) => s.trim() !== ""), // Real-time preview fix
          age,
          gender,
        }}
      />
    </div>
  );
};

export default ProfileEdit;
