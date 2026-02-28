const ConnectionCard = ({ connections }) => {
  const { firstName, lastName, age, gender, description, PhotoURL } =
    connections;
  return (
    <div className="flex items-center gap-5 p-4 rounded-2xl bg-base-300/40 border border-white/5 hover:bg-base-300/60 hover:border-white/10 transition-all duration-300 w-full max-w-2xl group shadow-sm hover:shadow-md">
      {/* Avatar with subtle hover ring */}
      <div className="avatar">
        <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
          <img
            src={PhotoURL}
            alt={`${firstName}'s profile`}
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <h2 className="text-xl font-bold tracking-wide capitalize text-white truncate">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mt-0.5">
            {age} • {gender}
          </p>
        )}

        <p className="text-sm mt-1.5 text-gray-400 line-clamp-1">
          {description}
        </p>
      </div>

      {/* Visual cue that this is an established connection */}
      <div className="text-gray-500 group-hover:text-primary transition-colors pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          {/* <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          /> */}
        </svg>
      </div>
    </div>
  );
};

export default ConnectionCard;
