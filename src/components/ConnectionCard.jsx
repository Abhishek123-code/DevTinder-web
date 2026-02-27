const ConnectionCard = ({ connections }) => {
  const { firstName, lastName, age, gender, description, PhotoURL } =
    connections;
  return (
    <div className="card bg-base-300 shadow-md w-full max-w-xl">
      <div className="flex items-center p-4 gap-4">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-16 h-16 rounded-full">
            <img src={PhotoURL} alt="profile" className="object-cover" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="font-semibold text-base">
            {firstName + " " + lastName}
          </h2>
          {age && gender && (
            <p className="text-sm opacity-60">{age + ", " + gender}</p>
          )}
          <p className="text-sm mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
