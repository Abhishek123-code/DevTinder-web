import { useRef, useState } from "react";
import { Form, useSubmit } from "react-router";

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
  const submit = useSubmit();

  // --- Swipe Physics State ---
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitX, setExitX] = useState(0);
  const startXRef = useRef(0);

  // 2. DELETED THE useEffect BLOCK ENTIRELY!
  // React will now reset the state automatically because we change the `key` in Feed.jsx

  // --- Event Handlers ---
  const handlePointerDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentDragX = e.clientX - startXRef.current;
    setDragX(currentDragX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 120;
    if (dragX > threshold) {
      handleAction("interested");
    } else if (dragX < -threshold) {
      handleAction("ignored");
    } else {
      setDragX(0);
    }
  };

  const handleAction = (status) => {
    const direction = status === "interested" ? 1 : -1;
    setExitX(direction * window.innerWidth);

    setTimeout(() => {
      submit({ userId: _id, status }, { method: "post" });
    }, 300);
  };

  const currentX = exitX || dragX;
  const rotateDeg = currentX * 0.05;

  const interestedOpacity = Math.min(Math.max(currentX / 100, 0), 1);
  const ignoredOpacity = Math.min(Math.max(-currentX / 100, 0), 1);

  return (
    <div
      className={`card bg-base-200 w-96 shadow-2xl border border-base-300 overflow-hidden touch-none select-none hover:cursor-grab ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translateX(${currentX}px) rotate(${rotateDeg}deg)`,
        transition: isDragging ? "none" : "transform 0.3s ease-out",
      }}
    >
      {/* --- Visual Swipe Stamps --- */}
      <div
        className="absolute top-8 left-6 z-20 border-4 border-success text-success font-black text-3xl tracking-widest px-4 py-1 rounded-lg uppercase transform -rotate-12 pointer-events-none"
        style={{ opacity: interestedOpacity }}
      >
        LIKE
      </div>
      <div
        className="absolute top-8 right-6 z-20 border-4 border-error text-error font-black text-3xl tracking-widest px-4 py-1 rounded-lg uppercase transform rotate-12 pointer-events-none"
        style={{ opacity: ignoredOpacity }}
      >
        NOPE
      </div>

      {/* --- Image Section --- */}
      <figure className="h-80 w-full bg-base-300 pointer-events-none">
        <img
          src={PhotoURL}
          alt={`${firstName}'s profile`}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </figure>

      {/* --- Card Body --- */}
      <div className="card-body p-6 gap-4">
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

        <p className="text-base text-base-content/80 line-clamp-3 leading-relaxed pointer-events-none">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(0, 5).map((skill, index) => (
            <div
              key={index}
              className="badge badge-primary badge-outline font-medium py-3 px-3 shadow-sm pointer-events-none"
            >
              {skill}
            </div>
          ))}
          {skills.length > 5 && (
            <div className="badge badge-neutral font-bold py-3 px-3 pointer-events-none">
              +{skills.length - 5}
            </div>
          )}
        </div>

        {/* --- Buttons --- */}
        <div className="card-actions justify-center gap-8 mt-4 pt-4 border-t border-base-300">
          <button
            type="button"
            onClick={() => handleAction("ignored")}
            className="btn btn-circle btn-lg btn-outline btn-error hover:text-white! shadow-md"
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
            type="button"
            onClick={() => handleAction("interested")}
            className="btn btn-circle btn-lg btn-success text-white shadow-lg shadow-success/30"
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
        </div>
      </div>
    </div>
  );
};

export default UserCard;
