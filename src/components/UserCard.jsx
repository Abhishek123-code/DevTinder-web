const UserCard = ({ feedData }) => {
  const { firstName, lastName, PhotoURL, description, skills, age, gender } =
    feedData;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={PhotoURL} alt="ProfilePic" className="w-full h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{description}</p>
        {skills.map((skill) => (
          <div key={skill} className="badge badge-accent mr-2">
            {skill}
          </div>
        ))}
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
