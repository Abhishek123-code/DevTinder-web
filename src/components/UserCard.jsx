import { Form } from "react-router";

const UserCard = ({ feedData }) => {
  const {
    _id,
    firstName,
    lastName,
    PhotoURL,
    description,
    skills,
    age,
    gender,
  } = feedData;
  return (
    //     <div className="card bg-base-300 w-96 shadow-xl rounded-2xl">
    //       <figure className="h-80">
    //         <img
    //           src={PhotoURL}
    //           alt="ProfilePic"
    //           className="w-full h-full object-cover"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <h2 className="card-title">{firstName + " " + lastName}</h2>
    //         {age && gender && <p>{age + ", " + gender}</p>}
    //         <p>{description}</p>

    //         {/* --- SKILLS FIX --- */}
    //         <div className="flex flex-wrap gap-2">
    //           {skills.slice(0, 5).map((skill, index) => (
    //             <div
    //               key={index} // 2. Changed to index so duplicate words don't break React
    //               className="badge badge-accent h-auto py-2 px-3 break-all text-left"
    //             >
    //               {skill}
    //             </div>
    //           ))}

    //           {/* 3. If there are more than 5 skills, render this overflow badge */}
    //           {skills.length > 5 && (
    //             <div className="badge badge-neutral h-auto py-2 px-3">
    //               +{skills.length - 5}
    //             </div>
    //           )}
    //         </div>
    //         {/* ------------------ */}

    //         <Form method="post" className="card-actions justify-center my-4">
    //           <input type="hidden" name="userId" value={_id} />
    //           <button className="btn btn-primary" name="status" value="ignored">
    //             Ignore
    //           </button>
    //           <button
    //             className="btn btn-secondary"
    //             name="status"
    //             value="interested"
    //           >
    //             Interested
    //           </button>
    //         </Form>
    //       </div>
    //     </div>
    //   );
    // };
    <div className="card bg-base-200 w-96 shadow-2xl border border-base-300 overflow-hidden">
      {/* Image Section */}
      <figure className="h-80 w-full bg-base-300">
        <img
          src={PhotoURL}
          alt={`${firstName}'s profile`}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-6 gap-4">
        {/* Header: Name, Age, Gender */}
        <div>
          <h2 className="card-title text-3xl font-extrabold capitalize mb-1">
            {firstName} {lastName}
            {age && (
              <div className="badge badge-neutral badge-lg ml-2">{age}</div>
            )}
          </h2>
          {gender && (
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {gender}
            </span>
          )}
        </div>

        {/* Bio */}
        <p className="text-base text-base-content/80 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Skills Container */}
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(0, 5).map((skill, index) => (
            <div
              key={index}
              className="badge badge-primary badge-outline font-medium py-3 px-3 shadow-sm"
            >
              {skill}
            </div>
          ))}
          {/* Overflow Badge */}
          {skills.length > 5 && (
            <div className="badge badge-neutral font-bold py-3 px-3">
              +{skills.length - 5}
            </div>
          )}
        </div>

        {/* DaisyUI Action Buttons (Circles) */}
        <Form
          method="post"
          className="card-actions justify-center gap-8 mt-4 pt-4 border-t border-base-300"
        >
          <input type="hidden" name="userId" value={_id} />

          <button
            className="btn btn-circle btn-lg btn-outline btn-error hover:text-white! shadow-md"
            name="status"
            value="ignored"
            title="Ignore"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            className="btn btn-circle btn-lg btn-success text-white shadow-lg shadow-success/30"
            name="status"
            value="interested"
            title="Interested"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UserCard;
