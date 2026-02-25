const UserCard = ({ feedData }) => {
  const { firstName, lastName, PhotoURL, description, skills, age, gender } =
    feedData;
  return (
    <div className="card bg-base-300 w-96 shadow-xl rounded-2xl">
      <figure className="h-80">
        <img
          src={PhotoURL}
          alt="ProfilePic"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="badge badge-accent h-auto mr-2 py-2 px-3 break-all text-left"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
