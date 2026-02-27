import { useLoaderData } from "react-router";
import RequestCard from "../../components/RequestCard";

const Request = () => {
  const requestData = useLoaderData();

  console.log(requestData);
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10 gap-4">
        <h2 className="card-title text-2xl ">Requests</h2>
        {requestData.lenght > 0 ? (
          requestData.map((request) => (
            <RequestCard
              key={request._id}
              requests={request.fromUserId}
              requestId={request._id}
            />
          ))
        ) : (
          <h2 className="card-title text-2xl ">You have no requests!</h2>
        )}
      </div>
    </div>
  );
};

export default Request;
