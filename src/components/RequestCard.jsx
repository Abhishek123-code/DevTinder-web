import { Form } from "react-router";

const RequestCard = ({ requests, requestId }) => {
  const { firstName, lastName, age, gender, description, PhotoURL } = requests;

  return (
    <div className="flex items-center gap-5 p-4 rounded-2xl bg-base-300/40 border border-white/5 hover:bg-base-300/60 hover:border-white/10 transition-all duration-300 w-full max-w-2xl group shadow-sm hover:shadow-md">
      {/* Avatar */}
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

      {/* Action Buttons: Sleek Pills */}
      <Form method="post" className="flex items-center gap-2 pr-1">
        <input type="hidden" name="requestId" value={requestId} />

        {/* Reject */}
        <button
          className="btn btn-sm px-4 rounded-full bg-error/10 text-error hover:bg-error hover:text-white border-none transition-colors"
          value="rejected"
          name="status"
        >
          Reject
        </button>

        {/* Accept */}
        <button
          className="btn btn-sm px-4 rounded-full bg-success/10 text-success hover:bg-success hover:text-white border-none transition-colors shadow-lg shadow-success/10"
          value="accepted"
          name="status"
        >
          Accept
        </button>
      </Form>
    </div>
  );
};
export default RequestCard;
