import { Form } from "react-router";

const RequestCard = ({ requests, requestId }) => {
  const { firstName, lastName, age, gender, description, PhotoURL } = requests;

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

        {/* Buttons */}
        <Form method="post" className="flex flex-col gap-2">
          <input type="hidden" name="requestId" value={requestId} />
          <button
            className="btn btn-sm btn-primary w-20"
            value="rejected"
            name="status"
          >
            Reject
          </button>
          <button
            className="btn btn-sm btn-secondary w-20"
            value="accepted"
            name="status"
          >
            Accept
          </button>
        </Form>
      </div>
    </div>
  );
};
export default RequestCard;
