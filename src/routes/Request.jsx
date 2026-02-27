import { useLoaderData } from "react-router";
import RequestCard from "../components/RequestCard";

const Request = () => {
  const requestData = useLoaderData();
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10 gap-4">
        <h2 className="card-title text-2xl ">Requests</h2>
        {requestData.map((request) => (
          <RequestCard
            key={request._id}
            requests={request.fromUserId}
            requestId={request._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Request;
